import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "weSafe Future Summit | India's Premier Tech & AI Conference",
    template: "%s | weSafe Future Summit",
  },
  description:
    "weSafe Future Summit — India's leading technology conference bringing together students, innovators, and industry leaders across 15+ cities. Hackathons, AI workshops, and the future of WESAFE: Water, Earth, Space, Air, Fire, Energy.",
  keywords: [
    "weSafe Summit",
    "tech conference India",
    "hackathon India",
    "AI conference",
    "student hackathon",
    "technology summit",
    "innovation",
    "WESAFE",
    "youth tech",
  ],
  authors: [{ name: "weSafe Future Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://summit.wesafefuture.org",
    siteName: "weSafe Future Summit",
    title: "weSafe Future Summit | India's Premier Tech & AI Conference",
    description:
      "India's leading technology conference. Hackathons, AI workshops, and innovation across 15+ cities.",
  },
  twitter: {
    card: "summary_large_image",
    title: "weSafe Future Summit",
    description: "India's Premier Tech & AI Conference",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
