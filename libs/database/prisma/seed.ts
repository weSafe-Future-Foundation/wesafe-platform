import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "rise@wesafefuture.org" },
    update: {},
    create: {
      email: "rise@wesafefuture.org",
      name: "weSafe Admin",
      role: "ADMIN",
      authProvider: "EMAIL",
      isVerified: true,
    },
  });
  console.log(`Admin user created: ${admin.email}`);

  // Create sample events
  const events = [
    {
      title: "weSafe Hackathon 2026 - North India",
      slug: "wesafe-hackathon-2026-north",
      description:
        "Join the biggest student hackathon in North India. Build innovative solutions for real-world problems in Water, Earth, Space, Air, Fire, and Energy domains.",
      shortDescription:
        "48-hour hackathon for students across North India",
      startDate: new Date("2026-05-15T09:00:00"),
      endDate: new Date("2026-05-17T18:00:00"),
      registrationDeadline: new Date("2026-05-10T23:59:59"),
      venue: "IIT Delhi Campus, New Delhi",
      isOnline: false,
      region: "NORTH" as const,
      status: "PUBLISHED" as const,
      maxParticipants: 500,
      prizePool: "Rs 5,00,000",
      tags: ["hackathon", "ai", "sustainability", "coding"],
    },
    {
      title: "AI Workshop Series - Online",
      slug: "ai-workshop-series-online-2026",
      description:
        "Learn AI and Machine Learning fundamentals in this 4-part workshop series. Hands-on projects, expert mentors, and certificates for all participants.",
      shortDescription: "4-part online AI workshop with hands-on projects",
      startDate: new Date("2026-06-01T14:00:00"),
      endDate: new Date("2026-06-28T16:00:00"),
      isOnline: true,
      meetingLink: "https://meet.wesafefuture.org/ai-workshop",
      region: "NATIONAL" as const,
      status: "PUBLISHED" as const,
      maxParticipants: 1000,
      tags: ["workshop", "ai", "machine-learning", "online"],
    },
    {
      title: "weSafe Hackathon 2026 - South India",
      slug: "wesafe-hackathon-2026-south",
      description:
        "The weSafe hackathon comes to South India. 48 hours of innovation, mentorship, and building solutions that matter.",
      shortDescription:
        "48-hour hackathon for students across South India",
      startDate: new Date("2026-07-10T09:00:00"),
      endDate: new Date("2026-07-12T18:00:00"),
      registrationDeadline: new Date("2026-07-05T23:59:59"),
      venue: "IIT Madras Campus, Chennai",
      isOnline: false,
      region: "SOUTH" as const,
      status: "DRAFT" as const,
      maxParticipants: 400,
      prizePool: "Rs 4,00,000",
      tags: ["hackathon", "sustainability", "coding"],
    },
  ];

  for (const event of events) {
    const created = await prisma.event.upsert({
      where: { slug: event.slug },
      update: {},
      create: event,
    });
    console.log(`Event created: ${created.title}`);
  }

  // Create sample marketing segments
  const segments = [
    {
      name: "All Students",
      description: "All registered students",
      rules: { tags: ["student"] },
      contactCount: 0,
    },
    {
      name: "North India Students",
      description: "Students from North India region",
      rules: { tags: ["student"], region: "north" },
      contactCount: 0,
    },
    {
      name: "Sponsors & Donors",
      description: "All companies and donors",
      rules: { tags: ["company", "donor"] },
      contactCount: 0,
    },
  ];

  for (const segment of segments) {
    await prisma.segment.create({ data: segment });
    console.log(`Segment created: ${segment.name}`);
  }

  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
