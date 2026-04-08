import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | weSafe Student Community",
  description:
    "Discover hackathons, workshops, summits, bootcamps, and fests across India. Register and earn points.",
};

/* ── Mock Event Data ── */
const events = [
  {
    title: "Jal Shakti Hackathon 2026",
    date: "May 15 – 17, 2026",
    type: "Hackathon",
    mode: "Hybrid",
    region: "National",
    element: "Water",
    icon: "\u{1F4A7}",
    gradient: "from-sky-400 to-blue-600",
    spots: "120 / 200",
    prize: "Rs 1,00,000",
    points: 500,
    featured: true,
    desc: "Build innovative solutions for water conservation. 48-hour coding sprint with mentorship from industry experts.",
  },
  {
    title: "Clean Air Workshop — Delhi NCR",
    date: "April 22, 2026",
    type: "Workshop",
    mode: "Offline",
    region: "North",
    element: "Air",
    icon: "\u{1F4A8}",
    gradient: "from-cyan-300 to-teal-500",
    spots: "45 / 60",
    prize: null,
    points: 100,
    featured: false,
    desc: "Hands-on workshop on building low-cost air quality monitors using Arduino and sensors.",
  },
  {
    title: "weSafe Summit 2026",
    date: "June 1 – 3, 2026",
    type: "Summit",
    mode: "Hybrid",
    region: "National",
    element: "Energy",
    icon: "\u{26A1}",
    gradient: "from-amber-300 to-yellow-500",
    spots: "800 / 1500",
    prize: null,
    points: 200,
    featured: true,
    desc: "India's largest student sustainability summit. 50+ speakers, workshops, networking, and career fair.",
  },
  {
    title: "Earth Guardians Bootcamp",
    date: "May 5 – 7, 2026",
    type: "Bootcamp",
    mode: "Online",
    region: "National",
    element: "Earth",
    icon: "\u{1F30D}",
    gradient: "from-green-400 to-emerald-600",
    spots: "200 / 300",
    prize: null,
    points: 150,
    featured: false,
    desc: "3-day intensive bootcamp on sustainable agriculture, reforestation techniques, and soil science.",
  },
  {
    title: "Space Tech Ideathon",
    date: "April 28, 2026",
    type: "Hackathon",
    mode: "Online",
    region: "National",
    element: "Space",
    icon: "\u{1F30C}",
    gradient: "from-indigo-400 to-purple-600",
    spots: "80 / 150",
    prize: "Rs 50,000",
    points: 300,
    featured: false,
    desc: "Design innovative solutions using satellite data for environmental monitoring.",
  },
  {
    title: "Renewable Energy Fest — Bangalore",
    date: "May 20 – 21, 2026",
    type: "Fest",
    mode: "Offline",
    region: "South",
    element: "Fire",
    icon: "\u{1F525}",
    gradient: "from-orange-400 to-red-500",
    spots: "300 / 500",
    prize: "Rs 75,000",
    points: 250,
    featured: true,
    desc: "Two-day festival celebrating renewable energy innovations. Competitions, exhibitions, and workshops.",
  },
];

const eventTypes = ["All", "Hackathon", "Workshop", "Summit", "Bootcamp", "Fest"];

const typeColors: Record<string, string> = {
  Hackathon: "bg-purple-100 text-purple-700",
  Workshop: "bg-blue-100 text-blue-700",
  Summit: "bg-amber-100 text-amber-700",
  Bootcamp: "bg-green-100 text-green-700",
  Fest: "bg-pink-100 text-pink-700",
};

export default function CommunityEventsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#062550] via-blue-800 to-[#062550] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-purple-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/community/dashboard"
            className="inline-flex items-center text-blue-300 hover:text-white text-sm mb-6 transition-colors"
          >
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {"\u{1F3AA}"} Upcoming Events
          </h1>
          <p className="mt-3 text-lg text-blue-200 max-w-2xl">
            Hackathons, workshops, summits, bootcamps, and fests. Register, attend,
            earn points, and win certificates.
          </p>
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
              { name: "Certificates", href: "/community/certificates", active: false },
              { name: "Events", href: "/community/events", active: true },
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Filters ── */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <span className="text-sm font-medium text-gray-500 mr-1">Type:</span>
          {eventTypes.map((t, i) => (
            <button
              key={t}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Featured Events ── */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {"\u{2B50}"} Featured Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((e) => e.featured)
              .map((ev) => (
                <div
                  key={ev.title}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all group"
                >
                  {/* Top bar with gradient */}
                  <div
                    className={`h-32 bg-gradient-to-br ${ev.gradient} flex flex-col items-center justify-center text-white p-4 relative`}
                  >
                    <span className="text-4xl mb-1">{ev.icon}</span>
                    <span className="text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">
                      {ev.element} Element
                    </span>
                    {ev.prize && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/20 text-xs font-bold rounded-full">
                        Prize: {ev.prize}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold ${typeColors[ev.type]}`}
                      >
                        {ev.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        {ev.mode} &middot; {ev.region}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {ev.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{ev.date}</p>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {ev.desc}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400">
                        {ev.spots} registered
                      </span>
                      <span className="text-xs font-bold text-green-600">
                        +{ev.points} pts
                      </span>
                    </div>
                    <button className="w-full mt-4 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ── All Events ── */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          All Events
        </h2>
        <div className="space-y-4">
          {events.map((ev) => (
            <div
              key={ev.title}
              className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ev.gradient} flex items-center justify-center text-2xl text-white flex-shrink-0`}
              >
                {ev.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${typeColors[ev.type]}`}
                  >
                    {ev.type}
                  </span>
                  <span className="text-xs text-gray-500">
                    {ev.mode} &middot; {ev.region}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900">{ev.title}</h3>
                <p className="text-sm text-gray-500">{ev.date}</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-gray-400">{ev.spots}</p>
                  <p className="text-sm font-bold text-green-600">
                    +{ev.points} pts
                  </p>
                </div>
                <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">
            Want to host an event with weSafe?
          </h3>
          <p className="text-gray-600 mt-2 max-w-md mx-auto">
            If your college or organisation wants to partner with us for a
            hackathon, workshop, or fest — we&apos;d love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
