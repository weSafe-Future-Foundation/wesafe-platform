import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Community | weSafe Future Foundation",
  description:
    "Join India's largest student community. Earn badges, win certificates, climb the leaderboard, and become a weSafe Ambassador. Open for Class 5+ students.",
  openGraph: {
    title: "Student Community | weSafe Future Foundation",
    description:
      "Join India's largest student community. Earn badges, certificates, and become a weSafe Ambassador.",
    type: "website",
  },
};

/* ── Ambassador Level Data ── */
const ambassadorLevels = [
  {
    level: "Seedling",
    emoji: "\u{1F331}",
    points: "0 – 100",
    color: "from-green-100 to-green-200 border-green-300",
    text: "text-green-800",
    desc: "Welcome aboard! Complete your profile and attend your first event.",
  },
  {
    level: "Explorer",
    emoji: "\u{1F33F}",
    points: "101 – 500",
    color: "from-emerald-100 to-teal-200 border-teal-300",
    text: "text-teal-800",
    desc: "You're learning fast. Complete element missions and earn your first badges.",
  },
  {
    level: "Guardian",
    emoji: "\u{1F333}",
    points: "501 – 1,500",
    color: "from-blue-100 to-blue-200 border-blue-300",
    text: "text-blue-800",
    desc: "A true protector. Lead teams, mentor juniors, and shine on the leaderboard.",
  },
  {
    level: "Champion",
    emoji: "\u{2B50}",
    points: "1,501 – 5,000",
    color: "from-purple-100 to-indigo-200 border-indigo-300",
    text: "text-indigo-800",
    desc: "Top 5% of the community. Win hackathons and share your journey on LinkedIn.",
  },
  {
    level: "Ambassador",
    emoji: "\u{1F3C6}",
    points: "5,000+",
    color: "from-amber-100 to-yellow-200 border-yellow-300",
    text: "text-amber-800",
    desc: "The highest honour. You represent weSafe across India. Badge of legend.",
  },
];

/* ── 6 WESAFE Elements ── */
const elements = [
  {
    name: "Water",
    letter: "W",
    color: "bg-[#5BB8F5]",
    gradient: "from-sky-400 to-blue-500",
    icon: "\u{1F4A7}",
    tagline: "Protect Every Drop",
    desc: "Learn about water conservation, ocean health, and how to ensure clean water for every community.",
  },
  {
    name: "Earth",
    letter: "E",
    color: "bg-[#22C55E]",
    gradient: "from-green-400 to-emerald-500",
    icon: "\u{1F30D}",
    tagline: "Guard Our Ground",
    desc: "Soil health, sustainable farming, reforestation, and building a greener future from the ground up.",
  },
  {
    name: "Space",
    letter: "S",
    color: "bg-[#6366F1]",
    gradient: "from-indigo-400 to-purple-500",
    icon: "\u{1F30C}",
    tagline: "Explore the Unknown",
    desc: "Space science, satellite technology, and inspiring the next generation of explorers and innovators.",
  },
  {
    name: "Air",
    letter: "A",
    color: "bg-[#67E8F9]",
    gradient: "from-cyan-300 to-teal-400",
    icon: "\u{1F4A8}",
    tagline: "Breathe Clean",
    desc: "Air quality, pollution solutions, and creating technology for cleaner cities and healthier lungs.",
  },
  {
    name: "Fire",
    letter: "F",
    color: "bg-[#F97316]",
    gradient: "from-orange-400 to-red-500",
    icon: "\u{1F525}",
    tagline: "Ignite Your Passion",
    desc: "Energy from fire, renewable alternatives, wildfire prevention, and the spark of human innovation.",
  },
  {
    name: "Energy",
    letter: "E",
    color: "bg-[#FCD34D]",
    gradient: "from-yellow-300 to-amber-400",
    icon: "\u{26A1}",
    tagline: "Power the Future",
    desc: "Solar, wind, hydrogen, and the technology that will power every home, school, and dream in India.",
  },
];

/* ── Features / What You Get ── */
const features = [
  {
    icon: "\u{1F3AF}",
    title: "Daily Missions",
    desc: "Complete fun daily challenges around the 6 elements. Earn points, learn something new every day, and build streaks.",
  },
  {
    icon: "\u{1F3C5}",
    title: "Badges & Certificates",
    desc: "Earn digital badges for every milestone. Get verified certificates you can share directly to LinkedIn and Instagram.",
  },
  {
    icon: "\u{1F4CA}",
    title: "Live Leaderboard",
    desc: "Compete with students across India. Regional and national rankings updated in real-time. Top performers get spotlight features.",
  },
  {
    icon: "\u{1F91D}",
    title: "Events & Hackathons",
    desc: "Register for hackathons, workshops, summits, bootcamps, and fests. Build real projects and win amazing prizes.",
  },
  {
    icon: "\u{1F4F1}",
    title: "Mobile App (Coming Soon)",
    desc: "Take your community everywhere. Track progress, complete missions, and connect with fellow students on the go.",
  },
  {
    icon: "\u{1F517}",
    title: "LinkedIn & Social Sharing",
    desc: "One-click share badges, certificates, and achievements to LinkedIn and Instagram. Build your professional brand early.",
  },
];

/* ── Stats ── */
const stats = [
  { value: "28+", label: "States Covered" },
  { value: "500+", label: "Students Joined" },
  { value: "50+", label: "Events Planned" },
  { value: "100+", label: "Colleges Connected" },
];

/* ── Points System ── */
const pointsActions = [
  { action: "Complete your profile", points: "+50", icon: "\u{1F464}" },
  { action: "Attend an event", points: "+100", icon: "\u{1F3AA}" },
  { action: "Win a hackathon", points: "+500", icon: "\u{1F3C6}" },
  { action: "Daily login streak", points: "+10/day", icon: "\u{1F525}" },
  { action: "Share on LinkedIn", points: "+25", icon: "\u{1F4E4}" },
  { action: "Refer a friend", points: "+50", icon: "\u{1F465}" },
  { action: "Complete element mission", points: "+75", icon: "\u{1F30D}" },
  { action: "Submit a project", points: "+150", icon: "\u{1F4BB}" },
];

export default function CommunityPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO – Full-width gradient with animated elements
      ═══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062550] via-blue-800 to-[#062550] text-white">
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        {/* Floating element circles (decorative) */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#5BB8F5]/20 blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-[#22C55E]/15 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-36 h-36 rounded-full bg-[#6366F1]/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full bg-[#F97316]/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-44 h-44 rounded-full bg-[#FCD34D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            <span className="text-sm font-medium text-green-300">
              Now Open for Students Across India
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Your Journey to Become
            <br />
            <span className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              India&apos;s Future Leader
            </span>
            <br />
            Starts Here
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Join the weSafe Student Community — earn badges, win certificates,
            climb the leaderboard, attend hackathons &amp; workshops, and become a{" "}
            <strong className="text-white">weSafe Ambassador</strong>. All while
            learning about the 6 elements that sustain life.
          </p>

          {/* Element pills row */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {elements.map((el) => (
              <span
                key={el.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${el.gradient} shadow-lg`}
              >
                {el.icon} {el.name}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/join"
              className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-white text-lg font-bold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all"
            >
              Join the Community — It&apos;s Free
            </Link>
            <Link
              href="/community/leaderboard"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border border-white/20 transition-all"
            >
              View Leaderboard
            </Link>
          </div>

          {/* Social proof */}
          <p className="mt-6 text-sm text-blue-300">
            Trusted by students from IITs, NITs, and 100+ colleges across India
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════════════ */}
      <section className="relative -mt-8 z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="py-6 sm:py-8 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-600">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6 WESAFE ELEMENTS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              The 6 Elements of{" "}
              <span className="text-blue-600">we</span>
              <span className="text-green-600">Safe</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Life depends on these 6 elements. Master them all, earn element
              badges, and prove you&apos;re ready to safeguard our future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((el) => (
              <div
                key={el.name}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-gray-300 bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Color bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${el.gradient}`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{el.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {el.name}
                      </h3>
                      <p className="text-sm font-medium text-gray-500">
                        {el.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {el.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span
                      className={`w-8 h-8 rounded-lg bg-gradient-to-r ${el.gradient} text-white text-sm font-bold flex items-center justify-center`}
                    >
                      {el.letter}
                    </span>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      Element Badge Available
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT YOU GET (Features)
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Everything You Need to{" "}
              <span className="text-green-600">Grow</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              One platform. Unlimited possibilities. Build your skills, your
              network, and your future — all for free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
              >
                <span className="text-4xl">{f.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-4">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          AMBASSADOR JOURNEY
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Ambassador Program
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Your Path to{" "}
              <span className="text-amber-500">Ambassador</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Every point you earn brings you closer to becoming a weSafe
              Ambassador — the highest honour in our community.
            </p>
          </div>

          {/* Journey timeline */}
          <div className="space-y-4">
            {ambassadorLevels.map((lvl, i) => (
              <div
                key={lvl.level}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border bg-gradient-to-r ${lvl.color} transition-all hover:shadow-md`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-4xl flex-shrink-0">{lvl.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className={`text-lg font-bold ${lvl.text}`}>
                        Level {i + 1}: {lvl.level}
                      </h3>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${lvl.text} bg-white/60`}
                      >
                        {lvl.points} pts
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{lvl.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW TO EARN POINTS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
              Points System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              How to Earn Points
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Every action counts. The more you engage, the faster you rise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pointsActions.map((pa) => (
              <div
                key={pa.action}
                className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <span className="text-2xl">{pa.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm">
                    {pa.action}
                  </p>
                </div>
                <span className="text-green-600 font-bold text-sm whitespace-nowrap">
                  {pa.points}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          LINKEDIN & SOCIAL SHARING PREVIEW
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                Build Your Brand
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Share Achievements on{" "}
                <span className="text-blue-600">LinkedIn</span> &amp;{" "}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                  Instagram
                </span>
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Every badge, certificate, and achievement you earn can be shared
                to your LinkedIn profile and Instagram with just one click.
                Build your professional brand while you&apos;re still in school or
                college.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "One-click share to LinkedIn with verified credentials",
                  "Beautiful Instagram story templates for each badge",
                  "Auto-generated certificate images with your name",
                  "Verified weSafe Ambassador badge for your LinkedIn profile",
                  "Portfolio link showcasing all your achievements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="text-green-500 mt-0.5 flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mock LinkedIn post preview */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Post header */}
                <div className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      Rahul Sharma
                    </p>
                    <p className="text-xs text-gray-500">
                      B.Tech CSE @ IIT Delhi | weSafe Ambassador
                    </p>
                  </div>
                </div>
                {/* Post content */}
                <div className="px-4 pb-3">
                  <p className="text-sm text-gray-700">
                    Thrilled to earn the{" "}
                    <span className="text-blue-600 font-semibold">
                      Water Guardian
                    </span>{" "}
                    badge from @weSafeFuture! Completed 10 missions on water
                    conservation and won the Jal Shakti Hackathon 2026.{" "}
                    <span className="text-blue-600">#weSafe</span>{" "}
                    <span className="text-blue-600">#StudentCommunity</span>
                  </p>
                </div>
                {/* Mock badge image */}
                <div className="mx-4 mb-4 h-44 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex flex-col items-center justify-center text-white">
                  <span className="text-5xl mb-2">{"\u{1F4A7}"}</span>
                  <p className="font-bold text-lg">Water Guardian Badge</p>
                  <p className="text-xs text-blue-100 mt-1">
                    Verified by weSafe Future Foundation
                  </p>
                </div>
                {/* Post actions */}
                <div className="px-4 py-3 border-t border-gray-100 flex gap-6 text-xs text-gray-500">
                  <span>247 Likes</span>
                  <span>38 Comments</span>
                  <span>12 Reposts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO CAN JOIN
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Open for <span className="text-blue-600">Every Student</span> in
              India
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re in Class 5 or a final-year PhD student — if you
              care about the future, you belong here.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "School Students",
                range: "Class 5 – 12",
                icon: "\u{1F393}",
                color: "bg-blue-50 border-blue-200",
                features: [
                  "Fun missions & challenges",
                  "Science & environment learning",
                  "School ambassador program",
                  "Participation certificates",
                ],
              },
              {
                title: "College Students",
                range: "UG / PG / Diploma",
                icon: "\u{1F4BB}",
                color: "bg-green-50 border-green-200",
                features: [
                  "Hackathons & bootcamps",
                  "Industry mentorship",
                  "LinkedIn badge showcase",
                  "Career opportunities",
                ],
              },
              {
                title: "Research Scholars",
                range: "PhD / Post-Doc",
                icon: "\u{1F52C}",
                color: "bg-purple-50 border-purple-200",
                features: [
                  "Research collaborations",
                  "Publishing opportunities",
                  "Mentor junior students",
                  "Conference invitations",
                ],
              },
            ].map((cat) => (
              <div
                key={cat.title}
                className={`rounded-2xl border p-6 ${cat.color} hover:shadow-lg transition-all`}
              >
                <span className="text-4xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-4">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {cat.range}
                </p>
                <ul className="mt-4 space-y-2">
                  {cat.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-green-500 text-xs">
                        {"\u{2714}"}
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#062550] via-blue-800 to-[#062550] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Ready to Shape the Future?
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-xl mx-auto">
            Join thousands of students who are learning, earning badges, and
            becoming the ambassadors India needs. Registration is completely
            free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/join"
              className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-white text-lg font-bold rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-400/40 transition-all"
            >
              Create Free Account
            </Link>
            <Link
              href="/community/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border border-white/20 transition-all"
            >
              Explore Dashboard
            </Link>
          </div>
          <p className="mt-6 text-sm text-blue-300">
            No credit card required. Sign up with Google, Email, or Phone OTP.
          </p>
        </div>
      </section>
    </>
  );
}
