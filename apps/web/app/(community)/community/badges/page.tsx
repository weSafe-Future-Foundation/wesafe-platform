import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Badges | weSafe Student Community",
  description:
    "Earn digital badges for every milestone. Share them on LinkedIn and Instagram to build your professional brand.",
};

/* ── Badge Categories ── */
const elementBadges = [
  {
    element: "Water",
    icon: "\u{1F4A7}",
    gradient: "from-sky-400 to-blue-500",
    borderColor: "border-sky-200",
    bgColor: "bg-sky-50",
    badges: [
      { name: "Water Curious", desc: "Complete your first Water mission", earned: true },
      { name: "Water Explorer", desc: "Complete 5 Water missions", earned: true },
      { name: "Water Guardian", desc: "Complete 10 Water missions", earned: true },
      { name: "Water Champion", desc: "Win a water-themed hackathon", earned: false },
      { name: "Water Ambassador", desc: "Lead a water conservation project", earned: false },
    ],
  },
  {
    element: "Earth",
    icon: "\u{1F30D}",
    gradient: "from-green-400 to-emerald-500",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
    badges: [
      { name: "Earth Curious", desc: "Complete your first Earth mission", earned: true },
      { name: "Earth Explorer", desc: "Complete 5 Earth missions", earned: true },
      { name: "Earth Guardian", desc: "Complete 10 Earth missions", earned: false },
      { name: "Earth Champion", desc: "Win an earth-themed hackathon", earned: false },
      { name: "Earth Ambassador", desc: "Lead a reforestation project", earned: false },
    ],
  },
  {
    element: "Space",
    icon: "\u{1F30C}",
    gradient: "from-indigo-400 to-purple-500",
    borderColor: "border-indigo-200",
    bgColor: "bg-indigo-50",
    badges: [
      { name: "Space Curious", desc: "Complete your first Space mission", earned: true },
      { name: "Space Explorer", desc: "Complete 5 Space missions", earned: false },
      { name: "Space Guardian", desc: "Complete 10 Space missions", earned: false },
      { name: "Space Champion", desc: "Build a space-tech project", earned: false },
      { name: "Space Ambassador", desc: "Inspire 50 students in space science", earned: false },
    ],
  },
  {
    element: "Air",
    icon: "\u{1F4A8}",
    gradient: "from-cyan-300 to-teal-400",
    borderColor: "border-cyan-200",
    bgColor: "bg-cyan-50",
    badges: [
      { name: "Air Curious", desc: "Complete your first Air mission", earned: true },
      { name: "Air Explorer", desc: "Complete 5 Air missions", earned: false },
      { name: "Air Guardian", desc: "Complete 10 Air missions", earned: false },
      { name: "Air Champion", desc: "Build an air quality monitor", earned: false },
      { name: "Air Ambassador", desc: "Lead a clean-air initiative", earned: false },
    ],
  },
  {
    element: "Fire",
    icon: "\u{1F525}",
    gradient: "from-orange-400 to-red-500",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    badges: [
      { name: "Fire Curious", desc: "Complete your first Fire mission", earned: true },
      { name: "Fire Explorer", desc: "Complete 5 Fire missions", earned: false },
      { name: "Fire Guardian", desc: "Complete 10 Fire missions", earned: false },
      { name: "Fire Champion", desc: "Win an energy innovation challenge", earned: false },
      { name: "Fire Ambassador", desc: "Lead a renewable energy project", earned: false },
    ],
  },
  {
    element: "Energy",
    icon: "\u{26A1}",
    gradient: "from-yellow-300 to-amber-400",
    borderColor: "border-yellow-200",
    bgColor: "bg-yellow-50",
    badges: [
      { name: "Energy Curious", desc: "Complete your first Energy mission", earned: true },
      { name: "Energy Explorer", desc: "Complete 5 Energy missions", earned: true },
      { name: "Energy Guardian", desc: "Complete 10 Energy missions", earned: false },
      { name: "Energy Champion", desc: "Build a solar/wind project", earned: false },
      { name: "Energy Ambassador", desc: "Power 100 students' energy knowledge", earned: false },
    ],
  },
];

const specialBadges = [
  { name: "Profile Complete", icon: "\u{2705}", desc: "Fill out your entire profile", earned: true, gradient: "from-green-300 to-teal-400" },
  { name: "First Event", icon: "\u{1F3AA}", desc: "Attend your very first event", earned: true, gradient: "from-blue-400 to-indigo-500" },
  { name: "Hackathon Hero", icon: "\u{1F4BB}", desc: "Participate in a hackathon", earned: true, gradient: "from-purple-400 to-pink-500" },
  { name: "7-Day Streak", icon: "\u{1F525}", desc: "Log in 7 days in a row", earned: true, gradient: "from-orange-400 to-red-500" },
  { name: "30-Day Streak", icon: "\u{1F4AA}", desc: "Log in 30 days in a row", earned: false, gradient: "from-red-400 to-pink-500" },
  { name: "Social Butterfly", icon: "\u{1F4E4}", desc: "Share 5 achievements on LinkedIn", earned: false, gradient: "from-blue-500 to-blue-600" },
  { name: "Team Player", icon: "\u{1F91D}", desc: "Join 3 team events", earned: true, gradient: "from-green-400 to-blue-500" },
  { name: "Mentor", icon: "\u{1F9D1}\u{200D}\u{1F3EB}", desc: "Help 10 juniors in the community", earned: false, gradient: "from-indigo-400 to-purple-500" },
  { name: "Referral Star", icon: "\u{1F465}", desc: "Invite 10 friends who join", earned: false, gradient: "from-pink-400 to-rose-500" },
  { name: "Quiz Master", icon: "\u{1F9E0}", desc: "Score 100% on 5 quizzes", earned: false, gradient: "from-violet-400 to-purple-500" },
  { name: "Project Builder", icon: "\u{1F6E0}\u{FE0F}", desc: "Submit 3 completed projects", earned: false, gradient: "from-gray-400 to-gray-600" },
  { name: "weSafe Ambassador", icon: "\u{1F3C6}", desc: "Reach 5,000 points", earned: false, gradient: "from-amber-400 to-yellow-500" },
];

export default function BadgesPage() {
  const totalEarned = elementBadges.reduce(
    (sum, cat) => sum + cat.badges.filter((b) => b.earned).length,
    0
  ) + specialBadges.filter((b) => b.earned).length;

  const totalBadges =
    elementBadges.reduce((sum, cat) => sum + cat.badges.length, 0) +
    specialBadges.length;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/community/dashboard"
            className="inline-flex items-center text-purple-300 hover:text-white text-sm mb-6 transition-colors"
          >
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {"\u{1F3C5}"} Your Badge Collection
          </h1>
          <p className="mt-3 text-lg text-purple-200 max-w-2xl">
            Earn badges by completing missions, attending events, and reaching
            milestones. Share them on LinkedIn to showcase your journey.
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-extrabold">{totalEarned}</p>
              <p className="text-sm text-purple-300">Badges Earned</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-extrabold">{totalBadges}</p>
              <p className="text-sm text-purple-300">Total Available</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <p className="text-2xl font-extrabold">
                {Math.round((totalEarned / totalBadges) * 100)}%
              </p>
              <p className="text-sm text-purple-300">Completion</p>
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
              { name: "Badges", href: "/community/badges", active: true },
              { name: "Certificates", href: "/community/certificates", active: false },
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
        {/* ── Element Badges ── */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Element Badges
        </h2>
        <div className="space-y-8 mb-16">
          {elementBadges.map((cat) => {
            const earned = cat.badges.filter((b) => b.earned).length;
            return (
              <div
                key={cat.element}
                className={`rounded-2xl border ${cat.borderColor} ${cat.bgColor} p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {cat.element} Badges
                      </h3>
                      <p className="text-sm text-gray-500">
                        {earned} / {cat.badges.length} earned
                      </p>
                    </div>
                  </div>
                  {/* Progress */}
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-24 bg-white/60 rounded-full h-2">
                      <div
                        className={`h-full bg-gradient-to-r ${cat.gradient} rounded-full`}
                        style={{
                          width: `${(earned / cat.badges.length) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {Math.round((earned / cat.badges.length) * 100)}%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {cat.badges.map((badge) => (
                    <div
                      key={badge.name}
                      className={`rounded-xl p-4 text-center transition-all ${
                        badge.earned
                          ? "bg-white shadow-sm hover:shadow-md cursor-pointer"
                          : "bg-white/40 opacity-50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-xl text-white mb-2 ${
                          badge.earned ? "shadow-md" : "grayscale opacity-60"
                        }`}
                      >
                        {badge.earned ? cat.icon : "\u{1F512}"}
                      </div>
                      <p className="text-xs font-semibold text-gray-800 leading-tight">
                        {badge.name}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-1">
                        {badge.desc}
                      </p>
                      {badge.earned && (
                        <button className="mt-2 text-[10px] text-blue-600 font-semibold hover:text-blue-700">
                          Share on LinkedIn {"\u{2197}\u{FE0F}"}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Special & Achievement Badges ── */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Achievement Badges
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {specialBadges.map((badge) => (
            <div
              key={badge.name}
              className={`rounded-xl p-5 text-center transition-all border ${
                badge.earned
                  ? "bg-white border-gray-200 hover:shadow-lg cursor-pointer"
                  : "bg-gray-50 border-gray-100 opacity-50"
              }`}
            >
              <div
                className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center text-2xl text-white mb-3 ${
                  badge.earned ? "shadow-md" : "grayscale opacity-60"
                }`}
              >
                {badge.earned ? badge.icon : "\u{1F512}"}
              </div>
              <p className="text-sm font-bold text-gray-800">{badge.name}</p>
              <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
              {badge.earned && (
                <button className="mt-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full hover:bg-blue-100 transition-colors">
                  Share on LinkedIn {"\u{2197}\u{FE0F}"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
