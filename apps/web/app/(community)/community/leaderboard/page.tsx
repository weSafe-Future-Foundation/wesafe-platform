import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leaderboard | weSafe Student Community",
  description:
    "See who's leading India's biggest student community. Regional and national rankings updated in real-time.",
};

/* ── Mock Leaderboard Data ── */
const regions = [
  "All India",
  "North",
  "South",
  "East",
  "West",
  "Central",
  "Northeast",
];

const levelMap: Record<
  string,
  { emoji: string; label: string; color: string }
> = {
  Ambassador: { emoji: "\u{1F3C6}", label: "Ambassador", color: "text-amber-600 bg-amber-50" },
  Champion: { emoji: "\u{2B50}", label: "Champion", color: "text-indigo-600 bg-indigo-50" },
  Guardian: { emoji: "\u{1F333}", label: "Guardian", color: "text-blue-600 bg-blue-50" },
  Explorer: { emoji: "\u{1F33F}", label: "Explorer", color: "text-teal-600 bg-teal-50" },
  Seedling: { emoji: "\u{1F331}", label: "Seedling", color: "text-green-600 bg-green-50" },
};

const leaderboard = [
  { rank: 1, name: "Ananya Patel", college: "IIT Bombay", region: "West", points: 5250, level: "Ambassador", badges: 32, streak: 45, change: 0 },
  { rank: 2, name: "Vikram Singh", college: "NIT Trichy", region: "South", points: 4820, level: "Champion", badges: 28, streak: 38, change: 1 },
  { rank: 3, name: "Priya Reddy", college: "BITS Pilani", region: "West", points: 4390, level: "Champion", badges: 26, streak: 31, change: -1 },
  { rank: 4, name: "Arjun Kumar", college: "IIT Madras", region: "South", points: 3950, level: "Champion", badges: 24, streak: 29, change: 2 },
  { rank: 5, name: "Sneha Das", college: "Jadavpur University", region: "East", points: 3710, level: "Champion", badges: 22, streak: 25, change: 0 },
  { rank: 6, name: "Rohan Mehta", college: "IIT Delhi", region: "North", points: 3450, level: "Champion", badges: 20, streak: 22, change: -2 },
  { rank: 7, name: "Kavya Nair", college: "NIT Calicut", region: "South", points: 3120, level: "Champion", badges: 19, streak: 18, change: 3 },
  { rank: 8, name: "Aditya Joshi", college: "COEP Pune", region: "West", points: 2880, level: "Guardian", badges: 17, streak: 15, change: 0 },
  { rank: 9, name: "Meera Sharma", college: "DTU Delhi", region: "North", points: 2650, level: "Guardian", badges: 16, streak: 14, change: 1 },
  { rank: 10, name: "Siddharth Rao", college: "IIIT Hyderabad", region: "South", points: 2420, level: "Guardian", badges: 15, streak: 12, change: -1 },
  { rank: 11, name: "Ishita Gupta", college: "NIT Nagpur", region: "Central", points: 2210, level: "Guardian", badges: 14, streak: 20, change: 2 },
  { rank: 12, name: "Devansh Tiwari", college: "IIT Kanpur", region: "North", points: 2050, level: "Guardian", badges: 14, streak: 10, change: 0 },
  { rank: 13, name: "Riya Chatterjee", college: "IIT Kharagpur", region: "East", points: 1890, level: "Guardian", badges: 13, streak: 9, change: -1 },
  { rank: 14, name: "Nikhil Verma", college: "NIT Rourkela", region: "East", points: 1750, level: "Guardian", badges: 12, streak: 7, change: 4 },
  { rank: 15, name: "Tanvi Agarwal", college: "VIT Vellore", region: "South", points: 1620, level: "Guardian", badges: 11, streak: 11, change: 0 },
  { rank: 16, name: "Harsh Pandey", college: "IIT BHU", region: "North", points: 1480, level: "Explorer", badges: 10, streak: 6, change: -2 },
  { rank: 17, name: "Shruti Iyer", college: "NIT Surathkal", region: "South", points: 1350, level: "Explorer", badges: 9, streak: 5, change: 1 },
  { rank: 18, name: "Karthik Menon", college: "IIIT Bangalore", region: "South", points: 1220, level: "Explorer", badges: 9, streak: 14, change: 0 },
  { rank: 19, name: "Pooja Rajput", college: "NIT Jaipur", region: "North", points: 1100, level: "Explorer", badges: 8, streak: 8, change: 3 },
  { rank: 20, name: "Aman Saxena", college: "NIT Bhopal", region: "Central", points: 980, level: "Explorer", badges: 7, streak: 4, change: -1 },
];

/* ── Stats ── */
const statsData = [
  { label: "Active Students", value: "523" },
  { label: "States Represented", value: "28" },
  { label: "Ambassadors", value: "3" },
  { label: "Avg. Daily Points", value: "42" },
];

export default function LeaderboardPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-[#062550] via-blue-800 to-[#062550] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-green-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <Link
            href="/community"
            className="inline-flex items-center text-blue-300 hover:text-white text-sm mb-6 transition-colors"
          >
            &larr; Back to Community
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {"\u{1F3C6}"} Student Leaderboard
          </h1>
          <p className="mt-3 text-lg text-blue-200 max-w-2xl">
            Real-time rankings of India&apos;s most active students. Earn
            points, climb the ranks, and earn your place among the best.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {statsData.map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <p className="text-2xl font-extrabold text-white">
                  {s.value}
                </p>
                <p className="text-sm text-blue-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Nav ── */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-none">
            {[
              { name: "Dashboard", href: "/community/dashboard", active: false },
              { name: "Leaderboard", href: "/community/leaderboard", active: true },
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Top 3 Podium ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* 2nd Place */}
          <div className="order-2 sm:order-1 bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow sm:mt-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-600 mb-3">
              {leaderboard[1].name.charAt(0)}
            </div>
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full mb-2">
              {"\u{1F948}"} 2nd
            </span>
            <h3 className="font-bold text-gray-900">{leaderboard[1].name}</h3>
            <p className="text-xs text-gray-500">{leaderboard[1].college}</p>
            <p className="text-xl font-extrabold text-blue-600 mt-2">
              {leaderboard[1].points.toLocaleString()} pts
            </p>
          </div>

          {/* 1st Place */}
          <div className="order-1 sm:order-2 bg-gradient-to-b from-amber-50 to-white rounded-2xl border-2 border-amber-200 p-6 text-center shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-400 text-white text-xs font-bold rounded-full shadow">
              {"\u{1F451}"} #1 in India
            </div>
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center text-3xl font-bold text-white mb-3 mt-3 shadow-lg">
              {leaderboard[0].name.charAt(0)}
            </div>
            <h3 className="font-bold text-gray-900 text-lg">
              {leaderboard[0].name}
            </h3>
            <p className="text-xs text-gray-500">{leaderboard[0].college}</p>
            <p className="text-2xl font-extrabold text-amber-600 mt-2">
              {leaderboard[0].points.toLocaleString()} pts
            </p>
            <div className="flex justify-center gap-3 mt-3">
              <span className="text-xs text-gray-500">
                {leaderboard[0].badges} badges
              </span>
              <span className="text-xs text-gray-500">
                {leaderboard[0].streak}-day streak
              </span>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow sm:mt-8">
            <div className="w-16 h-16 mx-auto rounded-full bg-orange-50 flex items-center justify-center text-2xl font-bold text-orange-600 mb-3">
              {leaderboard[2].name.charAt(0)}
            </div>
            <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full mb-2">
              {"\u{1F949}"} 3rd
            </span>
            <h3 className="font-bold text-gray-900">{leaderboard[2].name}</h3>
            <p className="text-xs text-gray-500">{leaderboard[2].college}</p>
            <p className="text-xl font-extrabold text-blue-600 mt-2">
              {leaderboard[2].points.toLocaleString()} pts
            </p>
          </div>
        </div>

        {/* ── Region Filter ── */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          <span className="text-sm font-medium text-gray-500 mr-1">
            Region:
          </span>
          {regions.map((r, i) => (
            <button
              key={r}
              className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* ── Full Leaderboard Table ── */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-1">Rank</div>
            <div className="col-span-4">Student</div>
            <div className="col-span-2">Level</div>
            <div className="col-span-1 text-center">Badges</div>
            <div className="col-span-1 text-center">Streak</div>
            <div className="col-span-2 text-right">Points</div>
            <div className="col-span-1 text-center">Change</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-50">
            {leaderboard.map((s) => {
              const lvl = levelMap[s.level];
              return (
                <div
                  key={s.rank}
                  className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors"
                >
                  {/* Rank */}
                  <div className="col-span-2 sm:col-span-1">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
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
                  </div>

                  {/* Student */}
                  <div className="col-span-10 sm:col-span-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {s.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 text-sm truncate">
                          {s.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {s.college} &middot; {s.region}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Level - hidden on mobile, visible via badges row below */}
                  <div className="hidden sm:block col-span-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${lvl.color}`}
                    >
                      {lvl.emoji} {lvl.label}
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="hidden sm:block col-span-1 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      {s.badges}
                    </span>
                  </div>

                  {/* Streak */}
                  <div className="hidden sm:block col-span-1 text-center">
                    <span className="text-sm text-gray-700">
                      {s.streak}d {"\u{1F525}"}
                    </span>
                  </div>

                  {/* Points */}
                  <div className="hidden sm:block col-span-2 text-right">
                    <span className="text-sm font-bold text-blue-600">
                      {s.points.toLocaleString()}
                    </span>
                  </div>

                  {/* Change */}
                  <div className="hidden sm:block col-span-1 text-center">
                    {s.change > 0 && (
                      <span className="text-green-500 text-sm font-medium">
                        {"\u{25B2}"} {s.change}
                      </span>
                    )}
                    {s.change < 0 && (
                      <span className="text-red-400 text-sm font-medium">
                        {"\u{25BC}"} {Math.abs(s.change)}
                      </span>
                    )}
                    {s.change === 0 && (
                      <span className="text-gray-300 text-sm">&mdash;</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see your name here? Join the community and start earning
            points today.
          </p>
          <Link
            href="/join"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors"
          >
            Join the Community — Free
          </Link>
        </div>
      </div>
    </>
  );
}
