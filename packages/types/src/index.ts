// ===========================================
// weSafe Platform - Shared Type Definitions
// Auto-generated from Prisma + custom types
// ===========================================

// Re-export all Prisma types
export type {
  User,
  StudentProfile,
  Event,
  EventRegistration,
  Certificate,
  Leaderboard,
  Donation,
  ContactForm,
  MarketingContact,
  Segment,
  EmailTemplate,
  Campaign,
  EmailLog,
} from "@wesafe/database";

export {
  UserRole,
  AuthProvider,
  EventStatus,
  EventRegion,
  RegistrationStatus,
  CertificateType,
  DonationStatus,
  ContactType,
  CampaignStatus,
  EmailStatus,
} from "@wesafe/database";

// ===========================================
// API Response Types
// ===========================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

// ===========================================
// Auth Types
// ===========================================

export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  role: string;
  avatarUrl: string | null;
}

export interface SessionUser extends AuthUser {
  studentProfileId?: string;
}

// ===========================================
// Event Types (Extended)
// ===========================================

export interface EventWithRegistrationCount {
  id: string;
  title: string;
  slug: string;
  shortDescription: string | null;
  startDate: Date;
  endDate: Date;
  region: string;
  status: string;
  bannerImageUrl: string | null;
  venue: string | null;
  isOnline: boolean;
  entryFee: number | null;
  _count: {
    registrations: number;
  };
}

export interface EventDetail {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string | null;
  startDate: Date;
  endDate: Date;
  registrationDeadline: Date | null;
  venue: string | null;
  isOnline: boolean;
  meetingLink: string | null;
  region: string;
  status: string;
  maxParticipants: number | null;
  entryFee: number | null;
  prizePool: string | null;
  bannerImageUrl: string | null;
  galleryUrls: string[];
  schedule: unknown;
  tags: string[];
  _count: {
    registrations: number;
  };
}

// ===========================================
// Student Types (Extended)
// ===========================================

export interface StudentDashboard {
  profile: {
    name: string;
    college: string | null;
    profileCompletionPercent: number;
    leaderboardPoints: number;
  };
  upcomingEvents: EventWithRegistrationCount[];
  recentActivity: {
    type: "registration" | "certificate" | "points";
    title: string;
    date: Date;
  }[];
  stats: {
    eventsAttended: number;
    certificatesEarned: number;
    totalPoints: number;
    rank: number | null;
  };
}

// ===========================================
// Marketing Types (Extended)
// ===========================================

export interface CampaignWithStats {
  id: string;
  name: string;
  status: string;
  sentAt: Date | null;
  stats: {
    sent: number;
    delivered: number;
    opened: number;
    clicked: number;
    bounced: number;
  } | null;
  template: {
    name: string;
    subject: string;
  };
  segment: {
    name: string;
    contactCount: number;
  };
}

// ===========================================
// Donation Types (Extended)
// ===========================================

export interface DonationRequest {
  donorName: string;
  donorEmail: string;
  donorPhone?: string;
  donorPan?: string;
  amount: number;
  isRecurring: boolean;
  message?: string;
}
