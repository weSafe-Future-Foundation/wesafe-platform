// ===========================================
// weSafe Platform - Shared API Client
// Used by both web and mobile apps
// ===========================================

import type {
  ApiResponse,
  PaginatedResponse,
  EventWithRegistrationCount,
  EventDetail,
  StudentDashboard,
  DonationRequest,
  AuthUser,
} from "@wesafe/types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

// ===========================================
// Base Fetch Helper
// ===========================================

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.message || "An error occurred",
      };
    }

    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}

// ===========================================
// Auth API
// ===========================================

export async function getCurrentUser(): Promise<ApiResponse<AuthUser>> {
  return apiRequest<AuthUser>("/auth/me");
}

// ===========================================
// Events API
// ===========================================

export async function getUpcomingEvents(
  region?: string,
  page: number = 1,
  pageSize: number = 12
): Promise<PaginatedResponse<EventWithRegistrationCount>> {
  const params = new URLSearchParams({
    page: page.toString(),
    pageSize: pageSize.toString(),
    status: "PUBLISHED",
  });
  if (region) params.set("region", region);

  const response = await fetch(
    `${API_BASE_URL}/events?${params.toString()}`
  );
  return response.json();
}

export async function getEventBySlug(
  slug: string
): Promise<ApiResponse<EventDetail>> {
  return apiRequest<EventDetail>(`/events/${slug}`);
}

export async function registerForEvent(
  eventId: string,
  teamName?: string
): Promise<ApiResponse<{ registrationId: string }>> {
  return apiRequest(`/events/${eventId}/register`, {
    method: "POST",
    body: JSON.stringify({ teamName }),
  });
}

// ===========================================
// Students API
// ===========================================

export async function registerStudent(data: {
  college: string;
  degree: string;
  graduationYear: number;
  skills: string[];
  region: string;
}): Promise<ApiResponse<{ profileId: string }>> {
  return apiRequest("/students/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateProfile(data: {
  college?: string;
  degree?: string;
  skills?: string[];
  bio?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}): Promise<ApiResponse<{ success: boolean }>> {
  return apiRequest("/students/profile", {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

export async function getStudentDashboard(): Promise<
  ApiResponse<StudentDashboard>
> {
  return apiRequest<StudentDashboard>("/students/dashboard");
}

export async function getCertificates(): Promise<
  ApiResponse<
    {
      id: string;
      type: string;
      certificateUrl: string;
      issuedAt: Date;
      event: { title: string };
    }[]
  >
> {
  return apiRequest("/students/certificates");
}

export async function getLeaderboard(
  region?: string,
  page: number = 1
): Promise<
  PaginatedResponse<{
    rank: number;
    studentName: string;
    college: string;
    totalPoints: number;
    region: string;
  }>
> {
  const params = new URLSearchParams({ page: page.toString() });
  if (region) params.set("region", region);

  const response = await fetch(
    `${API_BASE_URL}/leaderboard?${params.toString()}`
  );
  return response.json();
}

// ===========================================
// Donations API
// ===========================================

export async function createDonation(
  data: DonationRequest
): Promise<
  ApiResponse<{ orderId: string; razorpayOrderId: string; amount: number }>
> {
  return apiRequest("/donations", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function verifyDonation(data: {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}): Promise<ApiResponse<{ donationId: string; receiptUrl: string }>> {
  return apiRequest("/donations/verify", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ===========================================
// Contact API
// ===========================================

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone?: string;
  type: string;
  subject: string;
  message: string;
}): Promise<ApiResponse<{ success: boolean }>> {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ===========================================
// Marketing API (Admin only)
// ===========================================

export async function createCampaign(data: {
  name: string;
  templateId: string;
  segmentId: string;
  scheduledAt?: string;
}): Promise<ApiResponse<{ campaignId: string }>> {
  return apiRequest("/marketing/campaigns", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getMarketingAnalytics(): Promise<
  ApiResponse<{
    totalContacts: number;
    activeSubscribers: number;
    campaignsSent: number;
    averageOpenRate: number;
    averageClickRate: number;
    contactGrowth: { month: string; count: number }[];
  }>
> {
  return apiRequest("/marketing/analytics");
}
