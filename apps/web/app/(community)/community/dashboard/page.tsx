import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard | weSafe Student Community",
  description:
    "Your personal dashboard — track points, badges, missions, leaderboard rank, and upcoming events.",
};

/* ── Mock student data (will be fetched from API after auth) ── */
const student = {
  name: "Rahul Sharma",
  college: "IIT Delhi",
  degree: "B.Tech CSE",
  level: "Guardian",
  levelEmoji: "\u{1F333}",
  points: 875,
  nextLevelPoints: 1500,
  rank: 42,
  totalStudents: 523,
  streak: 7,
  badgeCount: 12,
  certCount: 3,
  eventsAttended: 8,
  joinedDate: "Jan 2026",
};

const progressPercent = Math.round(
  (student.points / student.nextLevelPoints) * 100
);

/* ── Daily Missions ── */
const dailyMissions = [
  {
    id: 1,
    title: "Read about Water Conservation",
    element: "Water",
    icon: "\u{1F4A7}",
    points: 15,
    done: true,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    id: 2,
    title: "Complete the Air Quality Quiz",
    element: "Air",
    icon: "\u{1F4A8}",
    points: 20,
    done: false,
    gradient: "from-cyan-300 to-teal-400",
  },
  {
    id: 3,
    title: "Share an achievement on LinkedIn",
    element: "Career",
    icon: "\u{1F4E4}",
    points: 25,
    done: false,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    id: 4,
    title: "Watch the Solar Energy Workshop video",
    element: "Energy",
    icon: "\u{26A1}",
    points: 15,
    done: false,
    gradient: "from-yellow-300 to-amber-400",
  },
];

/* ── Recent Badges ── */
const recentBadges = [
  {
    name: "Water Guardian",
    icon: "\u{1F4A7}",
    gradient: "from-sky-400 to-blue-500",
    date: "3 days ago",
  },
  {
    name: "First Hackathon",
    icon: "\u{1F3C6}",
    gradient: "from-amber-300 to-yellow-500",
    date: "1 week ago",
  },
  {
    name: "7-Day Streak",
    icon: "\u{1F525}",
    gradient: "from-orange-400 to-red-500",
    date: "Today",
  },
  {
    name: "Earth Explorer",
    icon: "\u{1F30D}",
    gradient: "from-green-400 to-emerald-500",
    date: "2 weeks ago",
  },
  {
    name: "Profile Complete",
    icon: "\u{2705}",
    gradient: "from-green-300 to-teal-400",
    date: "3 weeks ago",
  },
  {
    name: "Space Curious",
    icon: "\u{1F30C}",
    gradient: "from-indigo-400 to-purple-500",
    date: "1 month ago",
  },
];

/* ── Upcoming Events ── */
const upcomingEvents = [
  {
    title: "Jal Shakti Hackathon 2026",
    date: "May 15 – 17, 2026",
    type: "Hackathon",
    mode: "Hybrid",
    region: "National",
    slug: "/events",
  },
  {
    title: "Clean Air Workshop — Delhi NCR",
    date: "April 22, 2026",
    type: "Workshop",
    mode: "Offline",
    region: "North",
    slug: "/events",
  },
  {
    title: "weSafe Summit 2026",
    date: "June 1 – 3, 2026",
    type: "Summit",
    mode: "Hybrid",
    region: "National",
    slug: "/events",
  },
];

/* ── Leaderboard Preview ── */
const leaderboardTop = [
  { rank: 1, name: "Ananya Patel", college: "IIT Bombay", points: 4850 },
  { rank: 2, name: "Vikram Singh", college: "NIT Trichy", points: 4320 },
  { rank: 3, name: "Priya Reddy", college: "BITS Pilani", points: 3890 },
  { rank: 4, name: "Arjun Kumar", college: "IIT Madras", points: 3650 },
  { rank: 5, name: "Sneha Das", college: "NIT Warangal", points: 3210 },
];

export default function DashboardPage() {
  return (
    <>
      {/* ── Header Bar ── */}
      <section className="bg-gradient-to-r from-[#062550] to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-2xl font-bold shadow-lg">
                {student.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold">
                  Welcome back, {student.name.split(" ")[0]}!
                </h1>
                <p className="text-blue-300 text-sm">
                  {student.college} &middot; {student.degree} &middot; Joined{" "}
                  {student.joinedDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                {student.levelEmoji} {student.level}
              </span>
              <span className="px-3 py-1.5 bg-green-500/20 backdrop-blur-sm rounded-full text-sm font-semibold text-green-300 border border-green-400/30">
                {student.streak}-Day Streak {"\u{1F525}"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
            {[
              { name: "Dashboard", href: "/community/dashboard", active: true },
              { name: "Leaderboard", href: "/community/leaderboard", active: false },
              { name: "Badges", href: "/community/badges", active: false },
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Points",
              value: student.points.toLocaleString(),
              icon: "\u{2B50}",
              color: "text-amber-600",
              bg: "bg-amber-50",
            },
            {
              label: "India Rank",
              value: `#${student.rank}`,
              icon: "\u{1F4CA}",
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              label: "Badges Earned",
              value: student.badgeCount.toString(),
              icon: "\u{1F3C5}",
              color: "text-purple-600",
              bg: "bg-purple-50",
            },
            {
              label: "Events Attended",
              value: student.eventsAttended.toString(),
              icon: "\u{1F3AA}",
              color: "text-green-600",
              bg: "bg-green-50",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center text-lg`}
                >
                  {stat.icon}
                </span>
              </div>
              <p className={`text-2xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Level Progress ── */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{student.levelEmoji}</span>
              <h3 className="font-bold text-gray-900">{student.level}</h3>
            </div>
            <span className="text-sm text-gray-500">
              {student.points} / {student.nextLevelPoints.toLocaleString()} pts
              to <strong>Champion</strong>
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2">
            {student.nextLevelPoints - student.points} more points to reach
            Champion level
          </p>
        </div>

        {/* ── Main Content Grid ── */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Missions + Badges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Daily Missions */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">
                    {"\u{1F3AF}"} Today&apos;s Missions
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">
                    Complete missions to earn points and climb the leaderboard
                  </p>
                </div>
                <span className="text-sm font-semibold text-green-600">
                  1/4 Done
                </span>
              </div>
              <div className="divide-y divide-gray-50">
                {dailyMissions.map((m) => (
                  <div
                    key={m.id}
                    className={`flex items-center gap-4 p-4 ${m.done ? "bg-green-50/50" : "hover:bg-gray-50"} transition-colors`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${m.gradient} flex items-center justify-center text-white text-lg flex-shrink-0 ${m.done ? "opacity-60" : ""}`}
                    >
                      {m.done ? "\u{2714}" : m.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-medium text-sm ${m.done ? "line-through text-gray-400" : "text-gray-900"}`}
                      >
                        {m.title}
                      </p>
                      <p className="text-xs text-gray-500">{m.element}</p>
                    </div>
                    <span
                      className={`text-sm font-bold whitespace-nowrap ${m.done ? "text-green-500" : "text-amber-500"}`}
                    >
                      +{m.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Badges */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">
                  {"\u{1F3C5}"} Your Badges
                </h3>
                <Link
                  href="/community/badges"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All &rarr;
                </Link>
              </div>
              <div className="p-5 grid grid-cols-3 sm:grid-cols-6 gap-4">
                {recentBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className="text-center group cursor-pointer"
                  >
                    <div
                      className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center text-2xl text-white shadow-md group-hover:scale-110 transition-transform`}
                    >
                      {badge.icon}
                    </div>
                    <p className="text-xs font-medium text-gray-700 mt-2 leading-tight">
                      {badge.name}
                    </p>
                    <p className="text-[10px] text-gray-400">{badge.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">
                  {"\u{1F4C5}"} Upcoming Events
                </h3>
                <Link
                  href="/community/events"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All &rarr;
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {upcomingEvents.map((ev) => (
                  <Link
                    key={ev.title}
                    href={ev.slug}
                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">
                        {ev.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {ev.date} &middot; {ev.mode} &middot; {ev.region}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full whitespace-nowrap">
                      {ev.type}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leaderboard + Quick Actions */}
          <div className="space-y-8">
            {/* Leaderboard Preview */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">
                  {"\u{1F3C6}"} Top Students
                </h3>
                <Link
                  href="/community/leaderboard"
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Full List &rarr;
                </Link>
              </div>
              <div className="divide-y divide-gray-50">
                {leaderboardTop.map((s) => (
                  <div
                    key={s.rank}
                    className="flex items-center gap-3 px-5 py-3"
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        s.rank === 1
                          ? "bg-amber-100 text-amber-700"
                          : s.rank === 2
                            ? "bg-gray-100 text-gray-600"
                            : s.rank === 3
                              ? "bg-orange-100 text-orange-700"
                              : "bg-gray-50 text-gray-500"
                      }`}
                    >
                      {s.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {s.name}
                      </p>
                      <p className="text-xs text-gray-500">{s.college}</p>
                    </div>
                    <span className="text-sm font-bold text-blue-600">
                      {s.points.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              {/* Your position */}
              <div className="px-5 py-3 bg-blue-50 border-t border-blue-100">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-bold">
                    {student.rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-blue-800 text-sm">
                      You ({student.name})
                    </p>
                    <p className="text-xs text-blue-600">{student.college}</p>
                  </div>
                  <span className="text-sm font-bold text-blue-700">
                    {student.points.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4">
                {"\u{26A1}"} Quick Actions
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Share Badge to LinkedIn",
                    icon: "\u{1F4E4}",
                    href: "#",
                    color: "bg-blue-50 text-blue-700 hover:bg-blue-100",
                  },
                  {
                    label: "Register for Next Event",
                    icon: "\u{1F3AA}",
                    href: "/events",
                    color: "bg-green-50 text-green-700 hover:bg-green-100",
                  },
                  {
                    label: "View Certificates",
                    icon: "\u{1F4DC}",
                    href: "/community/certificates",
                    color:
                      "bg-purple-50 text-purple-700 hover:bg-purple-100",
                  },
                  {
                    label: "Edit Profile",
                    icon: "\u{1F464}",
                    href: "#",
                    color: "bg-gray-50 text-gray-700 hover:bg-gray-100",
                  },
                  {
                    label: "Invite Friends (+50 pts)",
                    icon: "\u{1F465}",
                    href: "#",
                    color:
                      "bg-amber-50 text-amber-700 hover:bg-amber-100",
                  },
                ].map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${action.color}`}
                  >
                    <span className="text-lg">{action.icon}</span>
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Element Progress */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-4">
                {"\u{1F30D}"} Element Progress
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Water", icon: "\u{1F4A7}", pct: 75, color: "bg-sky-400" },
                  { name: "Earth", icon: "\u{1F30D}", pct: 60, color: "bg-green-500" },
                  { name: "Space", icon: "\u{1F30C}", pct: 30, color: "bg-indigo-500" },
                  { name: "Air", icon: "\u{1F4A8}", pct: 45, color: "bg-cyan-400" },
                  { name: "Fire", icon: "\u{1F525}", pct: 20, color: "bg-orange-500" },
                  { name: "Energy", icon: "\u{26A1}", pct: 55, color: "bg-yellow-400" },
                ].map((el) => (
                  <div key={el.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {el.icon} {el.name}
                      </span>
                      <span className="text-xs text-gray-500">{el.pct}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className={`h-full ${el.color} rounded-full`}
                        style={{ width: `${el.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
