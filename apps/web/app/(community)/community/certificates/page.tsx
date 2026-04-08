import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificates | weSafe Student Community",
  description:
    "View and share your verified certificates from weSafe events, hackathons, and programs.",
};

/* ── Mock Certificate Data ── */
const certificates = [
  {
    id: "WSF-2026-H001",
    title: "Jal Shakti Hackathon 2026",
    type: "Winner" as const,
    date: "March 15, 2026",
    description: "1st Place — Water Conservation Track",
    element: "Water",
    icon: "\u{1F4A7}",
    gradient: "from-sky-400 to-blue-600",
    verificationCode: "WSF-JH26-W001",
    linkedinShared: true,
  },
  {
    id: "WSF-2026-W002",
    title: "Clean Air Workshop — Delhi NCR",
    type: "Participation" as const,
    date: "February 22, 2026",
    description: "5-hour intensive workshop on air quality monitoring",
    element: "Air",
    icon: "\u{1F4A8}",
    gradient: "from-cyan-300 to-teal-500",
    verificationCode: "WSF-CAW-P042",
    linkedinShared: false,
  },
  {
    id: "WSF-2026-S003",
    title: "weSafe Summit 2026 — Speaker",
    type: "Speaker" as const,
    date: "January 10, 2026",
    description: "Keynote on Student-Led Sustainability Initiatives",
    element: "Energy",
    icon: "\u{26A1}",
    gradient: "from-amber-300 to-yellow-500",
    verificationCode: "WSF-SM26-S007",
    linkedinShared: true,
  },
];

const typeColors: Record<string, string> = {
  Winner: "bg-amber-100 text-amber-700",
  "Runner Up": "bg-gray-100 text-gray-600",
  Participation: "bg-blue-100 text-blue-700",
  Mentor: "bg-purple-100 text-purple-700",
  Volunteer: "bg-green-100 text-green-700",
  Speaker: "bg-pink-100 text-pink-700",
};

export default function CertificatesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-green-700 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/community/dashboard"
            className="inline-flex items-center text-green-300 hover:text-white text-sm mb-6 transition-colors"
          >
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {"\u{1F4DC}"} Your Certificates
          </h1>
          <p className="mt-3 text-lg text-green-200 max-w-2xl">
            Every certificate is verified and can be shared on LinkedIn with a
            unique verification code. Build your professional portfolio.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-extrabold">{certificates.length}</p>
              <p className="text-sm text-green-300">Certificates Earned</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-extrabold">
                {certificates.filter((c) => c.linkedinShared).length}
              </p>
              <p className="text-sm text-green-300">Shared on LinkedIn</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
            {[
              { name: "Dashboard", href: "/community/dashboard", active: false },
              { name: "Leaderboard", href: "/community/leaderboard", active: false },
              { name: "Badges", href: "/community/badges", active: false },
              { name: "Certificates", href: "/community/certificates", active: true },
              { name: "Events", href: "/community/events", active: false },
            ].map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  tab.active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        {/* ── Certificate Cards ── */}
        <div className="space-y-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Certificate Preview */}
                <div
                  className={`lg:w-72 flex-shrink-0 bg-gradient-to-br ${cert.gradient} p-8 flex flex-col items-center justify-center text-white text-center`}
                >
                  <span className="text-5xl mb-3">{cert.icon}</span>
                  <p className="font-bold text-lg leading-tight">
                    {cert.type === "Winner" && "\u{1F3C6} "}
                    Certificate of {cert.type}
                  </p>
                  <p className="text-white/80 text-sm mt-1">{cert.element} Element</p>
                  <div className="mt-4 px-3 py-1 bg-white/20 rounded-full text-xs font-mono">
                    {cert.verificationCode}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${typeColors[cert.type] || "bg-gray-100 text-gray-600"}`}
                        >
                          {cert.type}
                        </span>
                        {cert.linkedinShared && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
                            Shared on LinkedIn
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{cert.description}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Issued: {cert.date}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                      {"\u{1F4E4}"} Share on LinkedIn
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white text-sm font-semibold rounded-lg transition-opacity">
                      {"\u{1F4F8}"} Share on Instagram
                    </button>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors">
                      {"\u{1F4E5}"} Download PDF
                    </button>
                    <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors">
                      {"\u{1F517}"} Copy Verification Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Empty state for no certificates ── */}
        {certificates.length === 0 && (
          <div className="text-center py-20">
            <span className="text-5xl">{"\u{1F4DC}"}</span>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              No Certificates Yet
            </h3>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              Attend events, participate in hackathons, and complete programs to
              earn your first certificate.
            </p>
            <Link
              href="/events"
              className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
            >
              Browse Events
            </Link>
          </div>
        )}

        {/* ── Verification Info ── */}
        <div className="mt-12 bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {"\u{1F50D}"} Certificate Verification
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            All weSafe certificates are digitally verified. Employers,
            universities, and recruiters can verify any certificate using the
            unique verification code at{" "}
            <span className="font-semibold text-blue-600">
              wesafefuture.org/verify
            </span>
            . Each certificate is permanently recorded and cannot be forged.
          </p>
        </div>
      </div>
    </>
  );
}
