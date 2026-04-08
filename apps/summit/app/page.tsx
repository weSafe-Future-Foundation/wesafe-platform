import Link from "next/link";

// ========================================
// DATA
// ========================================

const summitStats = [
  { value: "5,000+", label: "Attendees Expected" },
  { value: "15+", label: "Indian Cities" },
  { value: "100+", label: "Speakers & Mentors" },
  { value: "50+", label: "Hackathons & Workshops" },
  { value: "72", label: "Hours of Content" },
  { value: "25+", label: "Corporate Partners" },
];

const cities = [
  { name: "Delhi NCR", region: "North", tagline: "The Innovation Capital", emoji: "🏛️", date: "June 2026" },
  { name: "Bangalore", region: "South", tagline: "India's Silicon Valley", emoji: "💻", date: "July 2026" },
  { name: "Mumbai", region: "West", tagline: "The City of Dreams", emoji: "🌊", date: "August 2026" },
  { name: "Hyderabad", region: "South", tagline: "The Pearl City of Tech", emoji: "🔬", date: "September 2026" },
  { name: "Pune", region: "West", tagline: "The Oxford of the East", emoji: "📚", date: "October 2026" },
  { name: "Chennai", region: "South", tagline: "The Detroit of India", emoji: "⚡", date: "November 2026" },
  { name: "Kolkata", region: "East", tagline: "The City of Joy", emoji: "🎭", date: "December 2026" },
  { name: "Ahmedabad", region: "West", tagline: "The Heritage Hub", emoji: "🏗️", date: "January 2027" },
];

const tracks = [
  { name: "AI & Machine Learning", icon: "🤖", color: "from-purple-500 to-blue-500", talks: 12 },
  { name: "Web3 & Blockchain", icon: "⛓️", color: "from-cyan-500 to-blue-500", talks: 8 },
  { name: "Climate & Sustainability", icon: "🌍", color: "from-green-500 to-emerald-500", talks: 10 },
  { name: "Cybersecurity", icon: "🔒", color: "from-red-500 to-orange-500", talks: 8 },
  { name: "Mobile & IoT", icon: "📱", color: "from-blue-500 to-indigo-500", talks: 6 },
  { name: "Career & Startups", icon: "🚀", color: "from-orange-500 to-yellow-500", talks: 10 },
];

const speakers = [
  { name: "Dr. Priya Sharma", role: "AI Research Lead", org: "IIT Delhi", topic: "The Future of Generative AI in India" },
  { name: "Vikram Patel", role: "CTO", org: "TechCorp India", topic: "Building Scalable Products" },
  { name: "Anita Desai", role: "Founder & CEO", org: "GreenTech Labs", topic: "Climate Innovation Through Code" },
  { name: "Rajesh Kumar", role: "VP Engineering", org: "CloudScale", topic: "From Student to Tech Leader" },
  { name: "Meera Nair", role: "Data Scientist", org: "QuantumAI", topic: "ML for Social Impact" },
  { name: "Arjun Singh", role: "Cybersecurity Expert", org: "SecureNet", topic: "Protecting the Digital Future" },
];

const wesafeElements = [
  { letter: "W", word: "Water", color: "text-sky-400", glow: "shadow-sky-500/30" },
  { letter: "E", word: "Earth", color: "text-green-400", glow: "shadow-green-500/30" },
  { letter: "S", word: "Space", color: "text-indigo-400", glow: "shadow-indigo-500/30" },
  { letter: "A", word: "Air", color: "text-cyan-300", glow: "shadow-cyan-500/30" },
  { letter: "F", word: "Fire", color: "text-orange-400", glow: "shadow-orange-500/30" },
  { letter: "E", word: "Energy", color: "text-yellow-400", glow: "shadow-yellow-500/30" },
];

const pastHighlights = [
  { event: "Hackathon Delhi 2025", attendees: "1,200+", highlight: "48-hour non-stop coding marathon" },
  { event: "AI Workshop Bangalore", attendees: "800+", highlight: "Hands-on ML with industry mentors" },
  { event: "Code Sprint Mumbai", attendees: "600+", highlight: "Real-world problem solving challenge" },
  { event: "Tech Fest Pune", attendees: "500+", highlight: "Multi-track conference with 30+ speakers" },
];

// ========================================
// COUNTDOWN (static for SSR, shows target)
// ========================================

function CountdownDisplay() {
  return (
    <div className="flex gap-4 sm:gap-6 justify-center">
      {[
        { value: "62", label: "Days" },
        { value: "14", label: "Hours" },
        { value: "37", label: "Minutes" },
        { value: "22", label: "Seconds" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white">{item.value}</span>
          </div>
          <span className="text-xs text-gray-400 mt-2 block">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// ========================================
// PAGE
// ========================================

export default function SummitHomePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl font-bold">
                <span className="text-white">we</span>
                <span className="text-green-400">Safe</span>
                <span className="text-gray-400 font-normal ml-1.5 text-sm">Future Summit</span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#cities" className="text-sm text-gray-400 hover:text-white transition-colors">Cities</a>
              <a href="#tracks" className="text-sm text-gray-400 hover:text-white transition-colors">Tracks</a>
              <a href="#speakers" className="text-sm text-gray-400 hover:text-white transition-colors">Speakers</a>
              <a href="#highlights" className="text-sm text-gray-400 hover:text-white transition-colors">Highlights</a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wesafefuture.org"
                className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block"
              >
                wesafefuture.org
              </a>
              <a
                href="#register"
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION - Cinematic Dark */}
      {/* ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
            <span className="text-sm text-gray-300">Season 2026-27 — Registrations Open</span>
          </div>

          {/* WESAFE Elements Row */}
          <div className="flex justify-center gap-3 sm:gap-5 mb-10">
            {wesafeElements.map((el, i) => (
              <div key={i} className="flex flex-col items-center">
                <span
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg sm:text-2xl font-bold ${el.color} shadow-lg ${el.glow}`}
                >
                  {el.letter}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-500 mt-1.5">{el.word}</span>
              </div>
            ))}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-white">The Future of</span>
            <br />
            <span className="gradient-text">Tech in India</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            India&apos;s premier technology conference — bringing together the brightest
            students, innovators, and industry leaders across{" "}
            <span className="text-white font-medium">15+ cities</span>.
            Hackathons. AI Workshops. The next generation.
          </p>

          <p className="text-sm text-gray-500 mb-10">
            Presented by weSafe Future Foundation — Care Today, Sustain Tomorrow
          </p>

          {/* Countdown */}
          <div className="mb-10">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Next Event: Delhi NCR — June 2026</p>
            <CountdownDisplay />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#register"
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-lg shadow-blue-600/25"
            >
              Register for Free
            </a>
            <a
              href="#cities"
              className="px-10 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-colors text-lg"
            >
              Explore Cities
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS BAR */}
      {/* ============================================ */}
      <section className="relative border-y border-white/5 bg-[#111118]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {summitStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CITIES SECTION */}
      {/* ============================================ */}
      <section id="cities" className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 radial-glow" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-blue-400 uppercase tracking-widest font-semibold">Across India</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              One Summit. Many Cities.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              weSafe Future Summit travels across India&apos;s top tech hubs, bringing world-class
              hackathons and conferences to your city.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cities.map((city, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="text-4xl mb-4">{city.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{city.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-400 font-medium">{city.date}</span>
                  <span className="text-xs text-gray-600 px-2 py-1 rounded-full bg-white/5">{city.region}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTENT TRACKS */}
      {/* ============================================ */}
      <section id="tracks" className="py-20 sm:py-28 bg-[#111118]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-green-400 uppercase tracking-widest font-semibold">What You&apos;ll Learn</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Content Tracks
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Deep-dive into the technologies shaping India&apos;s future.
              Each track features talks, workshops, and hands-on labs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/10 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{track.icon}</span>
                  <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                    {track.talks} talks
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{track.name}</h3>
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${track.color} group-hover:w-24 transition-all`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SPEAKERS */}
      {/* ============================================ */}
      <section id="speakers" className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 radial-glow" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-purple-400 uppercase tracking-widest font-semibold">Who&apos;s Speaking</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Industry Leaders & Innovators
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Learn from the best minds in Indian tech — founders, researchers,
              engineers, and visionaries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center text-white text-xl font-bold mb-4">
                  {speaker.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-white">{speaker.name}</h3>
                <p className="text-sm text-blue-400">{speaker.role} — {speaker.org}</p>
                <p className="text-sm text-gray-500 mt-3 italic">&quot;{speaker.topic}&quot;</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              More speakers to be announced. Want to speak?{" "}
              <a href="https://wesafefuture.org/contact" className="text-blue-400 hover:text-blue-300 underline">
                Apply here
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PAST HIGHLIGHTS */}
      {/* ============================================ */}
      <section id="highlights" className="py-20 sm:py-28 bg-[#111118]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm text-orange-400 uppercase tracking-widest font-semibold">Our Track Record</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
              Past Event Highlights
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From packed auditoriums to late-night coding sessions — here&apos;s what
              weSafe events look like.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pastHighlights.map((event, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{event.event}</h3>
                  <span className="text-sm text-green-400 font-semibold">{event.attendees}</span>
                </div>
                <p className="text-gray-400">{event.highlight}</p>
                <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-blue-900/30 to-green-900/30 border border-white/5 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Event photos coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* REGISTRATION CTA */}
      {/* ============================================ */}
      <section id="register" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Ready to Join the
            <br />
            <span className="gradient-text">Movement?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re a student, developer, founder, or sponsor — there&apos;s a
            place for you at weSafe Future Summit. Registration is free for students.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12">
            {[
              { type: "Student", price: "Free", desc: "Full access to all events, hackathons, and workshops", highlight: true },
              { type: "Professional", price: "Coming Soon", desc: "Premium networking, reserved seating, exclusive sessions", highlight: false },
              { type: "Sponsor", price: "Custom", desc: "Brand visibility, talent pipeline, CSR impact", highlight: false },
            ].map((tier, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border ${
                  tier.highlight
                    ? "bg-gradient-to-b from-blue-600/10 to-green-600/10 border-blue-500/30"
                    : "bg-white/[0.03] border-white/[0.06]"
                }`}
              >
                <h3 className="text-lg font-bold text-white mb-1">{tier.type}</h3>
                <p className={`text-2xl font-bold mb-3 ${tier.highlight ? "text-green-400" : "text-gray-400"}`}>
                  {tier.price}
                </p>
                <p className="text-sm text-gray-500">{tier.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wesafefuture.org/join"
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-lg shadow-lg shadow-blue-600/25"
          >
            Register Now — It&apos;s Free
          </a>

          <p className="text-sm text-gray-600 mt-4">
            Registration on wesafefuture.org • No credit card required
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <footer className="border-t border-white/5 bg-[#111118]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-lg font-bold">
                <span className="text-white">we</span>
                <span className="text-green-400">Safe</span>
                <span className="text-gray-500 font-normal ml-1.5 text-sm">Future Summit</span>
              </span>
              <p className="text-sm text-gray-600 mt-1">
                A weSafe Future Foundation Initiative — Care Today, Sustain Tomorrow
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://wesafefuture.org" className="text-sm text-gray-500 hover:text-white transition-colors">
                Main Website
              </a>
              <a href="https://wesafefuture.org/contact" className="text-sm text-gray-500 hover:text-white transition-colors">
                Contact
              </a>
              <a href="https://wesafefuture.org/sponsors" className="text-sm text-gray-500 hover:text-white transition-colors">
                Sponsor Us
              </a>
              <a href="https://www.linkedin.com/company/wesafe-future-foundation" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} weSafe Future Foundation. All rights reserved.
              Section 8 Non-Profit | CIN: U88900UW2026NPL251138
            </p>
            <p className="text-xs text-gray-700">
              Graphix Tower 2, A-13, Sector 62, Noida, UP — 201301
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
