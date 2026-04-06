// ===========================================
// weSafe Platform - Marketing Engine Module
// Contact management, campaigns, templates
// ===========================================

import { Resend } from "resend";
import { prisma } from "@wesafe/database";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// ===========================================
// Contact Management
// ===========================================

export async function syncContactFromUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) return null;

  return prisma.marketingContact.upsert({
    where: { email: user.email },
    update: {
      userId: user.id,
      name: user.name,
      tags: [user.role.toLowerCase()],
    },
    create: {
      userId: user.id,
      email: user.email,
      name: user.name,
      tags: [user.role.toLowerCase()],
      source: "signup",
    },
  });
}

export async function importContactsFromCSV(
  contacts: { email: string; name?: string; tags?: string[] }[]
) {
  const results = [];

  for (const contact of contacts) {
    const result = await prisma.marketingContact.upsert({
      where: { email: contact.email },
      update: {
        name: contact.name,
        tags: contact.tags || [],
      },
      create: {
        email: contact.email,
        name: contact.name,
        tags: contact.tags || [],
        source: "import",
      },
    });
    results.push(result);
  }

  return results;
}

export async function getContactsBySegment(segmentId: string) {
  const segment = await prisma.segment.findUnique({
    where: { id: segmentId },
  });

  if (!segment) return [];

  const rules = segment.rules as Record<string, unknown>;
  // Build dynamic where clause from segment rules
  const where: Record<string, unknown> = { isSubscribed: true };

  if (rules.tags) {
    where.tags = { hasSome: rules.tags as string[] };
  }

  return prisma.marketingContact.findMany({ where });
}

// ===========================================
// Email Sending
// ===========================================

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  return resend.emails.send({
    from: params.from || "weSafe Future <noreply@wesafefuture.org>",
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
}

export async function sendCampaign(campaignId: string) {
  const campaign = await prisma.campaign.findUnique({
    where: { id: campaignId },
    include: {
      template: true,
      segment: true,
    },
  });

  if (!campaign) throw new Error("Campaign not found");

  const contacts = await getContactsBySegment(campaign.segmentId);

  // Update campaign status
  await prisma.campaign.update({
    where: { id: campaignId },
    data: { status: "SENDING" },
  });

  let sent = 0;
  let failed = 0;

  for (const contact of contacts) {
    try {
      // Replace template variables
      let html = campaign.template.bodyHtml;
      html = html.replace(/{{name}}/g, contact.name || "Friend");
      html = html.replace(/{{email}}/g, contact.email);

      const result = await sendEmail({
        to: contact.email,
        subject: campaign.template.subject,
        html,
      });

      await prisma.emailLog.create({
        data: {
          campaignId,
          contactId: contact.id,
          status: "SENT",
          resendMessageId: result.data?.id,
          sentAt: new Date(),
        },
      });

      sent++;
    } catch {
      await prisma.emailLog.create({
        data: {
          campaignId,
          contactId: contact.id,
          status: "BOUNCED",
          bouncedAt: new Date(),
        },
      });
      failed++;
    }
  }

  // Update campaign with final stats
  await prisma.campaign.update({
    where: { id: campaignId },
    data: {
      status: "SENT",
      sentAt: new Date(),
      stats: { sent, failed, delivered: 0, opened: 0, clicked: 0 },
    },
  });

  return { sent, failed, total: contacts.length };
}

// ===========================================
// Automation Triggers
// ===========================================

export async function sendWelcomeEmail(userEmail: string, userName: string) {
  return sendEmail({
    to: userEmail,
    subject: "Welcome to weSafe Future Foundation!",
    html: `
      <h1>Welcome, ${userName}!</h1>
      <p>We're thrilled to have you join the weSafe Future Foundation community.</p>
      <p>Explore upcoming hackathons, connect with fellow students, and start your journey with us.</p>
      <p><a href="https://wesafefuture.org/community/dashboard">Go to Dashboard</a></p>
    `,
  });
}

export async function sendEventReminder(
  userEmail: string,
  userName: string,
  eventTitle: string,
  eventDate: Date
) {
  const formattedDate = eventDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return sendEmail({
    to: userEmail,
    subject: `Reminder: ${eventTitle} is tomorrow!`,
    html: `
      <h1>Hey ${userName}, your event is tomorrow!</h1>
      <p><strong>${eventTitle}</strong> starts on ${formattedDate}.</p>
      <p>Make sure you're prepared and ready to go!</p>
      <p><a href="https://wesafefuture.org/community/events">View Event Details</a></p>
    `,
  });
}

export async function sendCertificateNotification(
  userEmail: string,
  userName: string,
  eventTitle: string,
  certificateUrl: string
) {
  return sendEmail({
    to: userEmail,
    subject: `Your Certificate for ${eventTitle} is Ready!`,
    html: `
      <h1>Congratulations, ${userName}!</h1>
      <p>Your certificate for <strong>${eventTitle}</strong> is now available.</p>
      <p><a href="${certificateUrl}">Download Certificate</a></p>
      <p>Don't forget to share it on LinkedIn!</p>
    `,
  });
}
