import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Join weSafe Future Foundation as a student, company, volunteer, or donor. Find your role in our community.",
  keywords: [
    "join",
    "registration",
    "community",
    "student",
    "volunteer",
    "company",
    "donor",
  ],
};

export default function JoinPage() {
  const roles = [
    {
      id: "student",
      title: "Student",
      subtitle: "Learn, Compete & Grow",
      icon: "🎓",
      color: "from-blue-500 to-blue-600",
      benefits: [
        "Access to hackathons and workshops",
        "Mentorship from industry experts",
        "Networking with peers and professionals",
        "Internship and job opportunities",
        "Certificate programs",
        "Community support",
      ],
      description:
        "Join thousands of students participating in technology competitions and learning programs.",
      cta: "Register as Student",
    },
    {
      id: "company",
      title: "Company",
      subtitle: "Talent Recruitment & CSR",
      icon: "🏢",
      color: "from-green-500 to-green-600",
      benefits: [
        "Recruit fresh talent",
        "Sponsor events and workshops",
        "CSR & impact initiatives",
        "Brand visibility",
        "Employee volunteering",
        "Partnership opportunities",
      ],
      description:
        "Partner with weSafe to find talented students and fulfill your corporate social responsibility.",
      cta: "Partner as Company",
    },
    {
      id: "volunteer",
      title: "Volunteer",
      subtitle: "Make a Difference",
      icon: "🤝",
      color: "from-purple-500 to-purple-600",
      benefits: [
        "Mentor students",
        "Help organize events",
        "Contribute your expertise",
        "Build your network",
        "Get volunteer certificate",
        "Join our mission",
      ],
      description:
        "Use your skills and experience to guide the next generation of innovators.",
      cta: "Sign Up as Volunteer",
    },
    {
      id: "donor",
      title: "Donor",
      subtitle: "Support Education",
      icon: "💝",
      color: "from-orange-500 to-orange-600",
      benefits: [
        "Tax-deductible donations",
        "Impact reports",
        "Recognition",
        "Monthly giving option",
        "Strategic giving guidance",
        "Donor community",
      ],
      description:
        "Support our mission through donations and create lasting impact on student lives.",
      cta: "Donate Now",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Join the <span className="text-green-300">weSafe</span> Community
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Choose your role and start your journey with weSafe Future
              Foundation
            </p>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find Your Role
            </h2>
            <p className="text-gray-600 text-lg">
              Everyone has a part to play in our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <div
                key={role.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-200 hover:border-transparent"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${role.color} text-white p-8 text-center`}
                >
                  <div className="text-5xl mb-3">{role.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                  <p className="text-sm opacity-90">{role.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 text-sm mb-6">
                    {role.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {role.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    {role.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Role Information */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Student Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  For Students
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Level up your skills through hackathons, workshops, and
                  mentorship. Network with peers and industry leaders. Get hired
                  by top companies.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Compete in hackathons with cash prizes",
                    "Learn from industry experts",
                    "Get internship placements",
                    "Build your portfolio",
                    "Access exclusive resources",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">+</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Register as Student
                </button>
              </div>
              <div className="bg-blue-100 rounded-2xl p-8 flex items-center justify-center h-72">
                <span className="text-7xl">🎓</span>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-green-100 rounded-2xl p-8 flex items-center justify-center h-72 md:order-2">
                <span className="text-7xl">🏢</span>
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  For Companies
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Recruit talented fresh graduates, sponsor events, and fulfill
                  your CSR commitments. Build your brand among the next
                  generation of innovators.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Access to pre-screened talent",
                    "Sponsorship opportunities",
                    "CSR and impact initiatives",
                    "Brand visibility",
                    "Employee volunteering programs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">+</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  Partner as Company
                </button>
              </div>
            </div>
          </div>

          {/* Volunteer Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  For Volunteers
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Share your expertise and make a direct impact on student lives.
                  Mentor, guide, and inspire the next generation of technology
                  leaders.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Mentor students one-on-one",
                    "Lead workshops",
                    "Help organize events",
                    "Build your network",
                    "Get recognized for your impact",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold mt-1">+</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                  Sign Up as Volunteer
                </button>
              </div>
              <div className="bg-purple-100 rounded-2xl p-8 flex items-center justify-center h-72">
                <span className="text-7xl">🤝</span>
              </div>
            </div>
          </div>

          {/* Donor Section */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-orange-100 rounded-2xl p-8 flex items-center justify-center h-72 md:order-2">
                <span className="text-7xl">💝</span>
              </div>
              <div className="md:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  For Donors
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Support our mission through donations. Get tax benefits,
                  transparent reporting, and the satisfaction of creating
                  lasting impact.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Tax-deductible donations (80G)",
                    "Monthly giving options",
                    "Impact reports and updates",
                    "Donor recognition",
                    "Strategic giving guidance",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">+</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Community
            </h2>
            <p className="text-gray-600 text-lg">
              By the numbers: The weSafe Impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Students", icon: "🎓" },
              { number: "50+", label: "Hackathons", icon: "🏆" },
              { number: "25+", label: "Companies", icon: "🏢" },
              { number: "15+", label: "Cities", icon: "🌍" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Registration FAQs
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Is there a registration fee?",
                answer:
                  "Student registration is completely free! For companies and sponsors, partnership details are discussed individually.",
              },
              {
                question: "How long does registration take?",
                answer:
                  "Student registration takes about 5-10 minutes. You'll get instant access to the community after signup.",
              },
              {
                question: "Can I change my role after registration?",
                answer:
                  "Yes! You can update your profile and change your role anytime from your dashboard.",
              },
              {
                question: "What information do you need?",
                answer:
                  "For students: Name, email, phone, college, and field of study. We use this to match you with relevant events and opportunities.",
              },
              {
                question: "Is my data safe?",
                answer:
                  "Your data is completely secure. We follow industry-standard security practices and never share your information without consent.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-blue-300 transition-colors group cursor-pointer"
              >
                <summary className="font-semibold text-gray-900 flex items-center justify-between">
                  {faq.question}
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Pick your role above and let's get started. It takes just a few
            minutes!
          </p>
        </div>
      </section>
    </>
  );
}
