# weSafe Platform

**One Platform | One Data Cloud | Multiple Products | AI on Top**

weSafe Future Foundation's unified digital platform — powering the website, student community portal, mobile app, and marketing engine from a single codebase.

## Quick Start

```bash
# Prerequisites: Node.js 20+, pnpm 9+
git clone https://github.com/weSafe-Future-Foundation/wesafe-platform.git
cd wesafe-platform
pnpm install
cp .env.example .env.local  # Fill in your credentials
pnpm db:generate             # Generate Prisma client
pnpm db:push                 # Push schema to database
pnpm db:seed                 # Seed with sample data
pnpm dev                     # Start all apps
```

**Web:** http://localhost:3000 | **API:** http://localhost:4000 | **API Docs:** http://localhost:4000/api/docs

## Architecture

```
wesafe-platform/          Turborepo Monorepo
├── apps/
│   ├── web/              Next.js 15 (Website + Portal + Admin)
│   ├── api/              NestJS (REST API)
│   └── mobile/           Expo + React Native (Future)
├── packages/
│   ├── ui/               Shared UI Components (NativeWind)
│   ├── types/            TypeScript Type Definitions
│   ├── api-client/       Shared API Client Functions
│   ├── auth/             NextAuth.js + RBAC
│   └── marketing/        Marketing Engine Module
├── libs/
│   └── database/         Prisma ORM + PostgreSQL Schema
└── .github/workflows/    CI/CD Pipeline
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Monorepo | Turborepo + pnpm |
| Website + Portal | Next.js 15 + Tailwind CSS |
| Mobile App | Expo + React Native + NativeWind |
| Backend API | NestJS + TypeScript |
| Database | PostgreSQL (Supabase) + Prisma |
| Email | Resend + React Email |
| CMS | Sanity |
| Payments | Razorpay |
| Storage | Cloudflare R2 |
| Hosting | Vercel + Cloudflare |

## Domain

**wesafefuture.org**

---

*W.E.S.A.F.E = Water . Earth . Space . Air . Fire . Energy*
