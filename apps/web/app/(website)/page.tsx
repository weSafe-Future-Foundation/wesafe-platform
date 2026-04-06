import Link from "next/link";

// WESAFE elements for the hero section
const wesafeElements = [
  { letter: "W", word: "Water", color: "text-sky-500", bg: "bg-sky-50" },
  { letter: "E", word: "Earth", color: "text-lime-600", bg: "bg-lime-50" },
  { letter: "S", word: "Space", color: "text-indigo-500", bg: "bg-indigo-50" },
  { letter: "A", word: "Air", color: "text-cyan-400", bg: "bg-cyan-50" },
  { letter: "F", word: "Fire", color: "text-orange-500", bg: "bg-orange-50" },
  { letter: "E", word: "Energy", color: "text-yellow-500", bg: "bg-yellow-50" },
];

// Impact stats (will be dynamic from API later)
const impactStats = [
  { label: "Students Reached", value: "5,000+", icon: "🎓" },
  { label: "Events Held", value: "50+", icon: "🏆" },
  { label: "Companies Partnered", value: "25+", icon: "🤝" },
  { label: "Cities Covered", value: "15+", icon: "🌍" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center">
            {/* WESAFE Elements */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-8">
              {wesafeElements.map((el, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${el.bg} flex items-center justify-center text-xl sm:text-2xl font-bold ${el.color}`}
                  >
                    {el.letter}
                  </span>
                  <span className="text-xs text-blue-100 mt-1">{el.word}</span>
                </div>
              ))}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Empowering Youth
              <br />
              <span className="text-green-300">Through Technology</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-10">
              weSafe Future Foundation organizes hackathons, workshops, and
              technology education programs across India. Join thousands of
              students building the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
              >
                Join the Community
              </Link>
              <Link
                href="/events"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe every student deserves access to technology education
              and opportunities to showcase their skills. Through hackathons and
              community programs, we're building the next generation of
              innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hackathons",
                description:
                  "National and regional hackathons where students solve real-world problems using technology.",
                icon: "💻",
              },
              {
                title: "Community",
                description:
                  "A vibrant community of students, mentors, and industry leaders sharing knowledge and opportunities.",
                icon: "🌐",
              },
              {
                title: "Impact",
                description:
                  "Focused on creating lasting impact through education, innovation, and environmental awareness.",
                icon: "🌱",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Whether you're a student, sponsor, volunteer, or donor — there's a
            place for you in the weSafe community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
            >
              Join as Student
            </Link>
            <Link
              href="/sponsors"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/donate"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
