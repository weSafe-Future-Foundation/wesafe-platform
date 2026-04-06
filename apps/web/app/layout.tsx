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
    default: "weSafe Future Foundation | Empowering Youth Through Technology",
    template: "%s | weSafe Future Foundation",
  },
  description:
    "weSafe Future Foundation empowers students through hackathons, workshops, and technology education across India. Water, Earth, Space, Air, Fire, Energy.",
  keywords: [
    "weSafe",
    "hackathon",
    "students",
    "technology",
    "India",
    "youth",
    "foundation",
    "coding",
    "workshops",
  ],
  authors: [{ name: "weSafe Future Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wesafefuture.org",
    siteName: "weSafe Future Foundation",
    title: "weSafe Future Foundation | Empowering Youth Through Technology",
    description:
      "Empowering students through hackathons, workshops, and technology education across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "weSafe Future Foundation",
    description: "Empowering Youth Through Technology",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
