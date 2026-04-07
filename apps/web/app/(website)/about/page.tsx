import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about weSafe Future Foundation, our mission, philosophy, and impact on youth education across India. Registered Section 8 organization with 12A and 80G status.",
  keywords: [
    "about weSafe",
    "foundation story",
    "WESAFE philosophy",
    "Section 8",
    "12A",
    "80G",
    "CIN",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="text-green-300">weSafe</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering the next generation through technology, innovation, and
              community-driven initiatives
            </p>
            <p className="text-base sm:text-lg text-green-200 max-w-2xl mx-auto mt-4 italic">
              Care Today, Sustain Tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Story Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Foundation Story
              </h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                weSafe Future Foundation was established with a clear mission: to
                bridge the gap between technical education and real-world industry
                opportunities for students across India.
              </p>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                What started as a small initiative to organize hackathons has
                grown into a national platform connecting thousands of students,
                mentors, and industry leaders.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, we continue to expand our reach across regions, bringing
                quality technology education and career opportunities to every
                corner of the country.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Founded
                  </h3>
                  <p className="text-gray-600">
                    Started with a vision to democratize technology education
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Growth
                  </h3>
                  <p className="text-gray-600">
                    Expanded to 15+ cities with 5,000+ students reached
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Impact
                  </h3>
                  <p className="text-gray-600">
                    50+ hackathons and workshops organized nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WESAFE Philosophy Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              WESAFE Philosophy
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our core values represented through the five elements that drive
              everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                letter: "W",
                word: "Water",
                description:
                  "Adaptability and flow - we adapt to the changing needs of students and industry",
                color: "bg-sky-50",
                textColor: "text-sky-600",
              },
              {
                letter: "E",
                word: "Earth",
                description:
                  "Grounding and sustainability - we build foundations that last",
                color: "bg-lime-50",
                textColor: "text-lime-600",
              },
              {
                letter: "S",
                word: "Space",
                description:
                  "Innovation and expansion - we think beyond boundaries",
                color: "bg-indigo-50",
                textColor: "text-indigo-600",
              },
              {
                letter: "A",
                word: "Air",
                description:
                  "Freedom and accessibility - making opportunities available to all",
                color: "bg-cyan-50",
                textColor: "text-cyan-600",
              },
              {
                letter: "F",
                word: "Fire",
                description:
                  "Passion and energy - driving transformation through enthusiasm",
                color: "bg-orange-50",
                textColor: "text-orange-600",
              },
              {
                letter: "E",
                word: "Energy",
                description:
                  "Impact and momentum - creating lasting positive change",
                color: "bg-yellow-50",
                textColor: "text-yellow-600",
              },
            ].map((element, i) => (
              <div
                key={i}
                className={`${element.color} rounded-2xl p-8 text-center hover:shadow-lg transition-shadow`}
              >
                <div
                  className={`text-5xl font-bold ${element.textColor} mb-3`}
                >
                  {element.letter}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {element.word}
                </h3>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To create a globally recognized platform where every Indian
                student has access to quality technology education, mentorship,
                and career opportunities that transform their lives and drive
                innovation across the nation.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower students through technology-driven hackathons,
                workshops, and community programs that foster innovation,
                collaboration, and environmental consciousness while creating
                pathways to successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Placeholder */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              Dedicated professionals leading the weSafe mission
            </p>
          </div>

          <div className="p-8 bg-blue-50 rounded-2xl text-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Our growing team of passionate individuals is working to make a difference. Team profiles will be updated soon.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Details Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Legal & Registration
            </h2>
            <p className="text-gray-600 text-lg">
              weSafe Future Foundation is a registered non-profit organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Registration Details
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    Organization Type
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Section 8 Company
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    Corporate Identification Number (CIN)
                  </p>
                  <p className="text-gray-900 font-semibold">
                    U88900UW2026NPL251138
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    Registration Number
                  </p>
                  <p className="text-gray-900 font-semibold">
                    251138
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Registered Office</p>
                  <p className="text-gray-900 font-semibold">
                    Graphix Tower 2, A-13, Sector 62, Noida, UP — 201301
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Tax Benefits
              </h3>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    Income Tax Exemption
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Section 12A Registered
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    Donation Deduction Status
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Section 80G Approved
                  </p>
                </div>
                <div className="border-b pb-3">
                  <p className="text-sm text-gray-600 mb-1">
                    Exemption Certificate No.
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Applied For
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Donors can claim donations
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Up to 50% of gross income
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
            <p className="text-gray-700">
              For complete compliance documents, tax exemption certificates, and
              annual returns, please{" "}
              <a href="/contact" className="text-blue-600 font-semibold hover:underline">
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
