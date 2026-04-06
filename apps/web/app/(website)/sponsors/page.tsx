import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Sponsors",
  description:
    "Partner with weSafe Future Foundation through CSR initiatives. Tax benefits, impact reports, and corporate social responsibility opportunities.",
  keywords: [
    "CSR",
    "sponsorship",
    "corporate partnership",
    "tax benefits",
    "80G",
    "social responsibility",
    "impact",
  ],
};

export default function SponsorsPage() {
  const csrTiers = [
    {
      name: "Platinum Partner",
      amount: "₹50,00,000+",
      color: "from-gray-600 to-gray-700",
      benefits: [
        "Primary naming rights on major events",
        "Annual impact report with CSR metrics",
        "Executive advisory board seat",
        "Full tax deduction eligibility (80G)",
        "Brand visibility across all platforms",
        "Dedicated CSR liaison manager",
      ],
    },
    {
      name: "Gold Partner",
      amount: "₹25,00,000 - ₹49,99,999",
      color: "from-yellow-500 to-yellow-600",
      benefits: [
        "Presenting sponsor of major event",
        "Quarterly impact reports",
        "Enhanced brand recognition",
        "Tax deduction eligible (80G)",
        "Logo on website and materials",
        "CSR impact documentation",
      ],
    },
    {
      name: "Silver Partner",
      amount: "₹10,00,000 - ₹24,99,999",
      color: "from-gray-400 to-gray-500",
      benefits: [
        "Event sponsorship opportunity",
        "Bi-annual impact updates",
        "Tax benefits (80G approved)",
        "Logo placement",
        "Social media recognition",
        "Impact metrics report",
      ],
    },
    {
      name: "Bronze Partner",
      amount: "₹5,00,000 - ₹9,99,999",
      color: "from-orange-600 to-orange-700",
      benefits: [
        "Event participation",
        "Annual impact summary",
        "Tax deduction eligible",
        "Certificate of recognition",
        "Social media mention",
      ],
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
              CSR & <span className="text-green-300">Sponsorship</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Partner with us to create meaningful impact through education and
              innovation. Tax benefits and measurable CSR outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With weSafe
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Create lasting impact while fulfilling your CSR mandate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Measurable Impact",
                description:
                  "Track your CSR spending through detailed impact reports and student success stories",
                icon: "📊",
              },
              {
                title: "Tax Efficiency",
                description:
                  "Full tax deduction under Section 80G. Reduce your tax liability while doing good.",
                icon: "💰",
              },
              {
                title: "Brand Visibility",
                description:
                  "Reach 5,000+ students annually through our platform and events",
                icon: "👁️",
              },
              {
                title: "National Reach",
                description:
                  "Impact students across 15+ cities in different regions of India",
                icon: "🗺️",
              },
              {
                title: "Strategic Alignment",
                description:
                  "Align your CSR strategy with education, technology, and environmental initiatives",
                icon: "🎯",
              },
              {
                title: "Long-term Partnership",
                description:
                  "Build sustained relationships with the next generation of innovators",
                icon: "🤝",
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

      {/* CSR Tiers Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              CSR Partnership Tiers
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the tier that aligns with your CSR objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {csrTiers.map((tier, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${tier.color} text-white p-8 text-center`}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-lg opacity-90">{tier.amount}</p>
                </div>

                <div className="p-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Benefits:</h4>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full mt-8 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Reports Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impact Reports & CSR Documentation
            </h2>
            <p className="text-gray-600 text-lg">
              Transparent reporting on how CSR funds create impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-blue-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Receive
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-2xl">📋</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Annual CSR Report
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive documentation of fund utilization and impact
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">📊</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Impact Metrics
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Students reached, events conducted, skills imparted
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">🎥</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Success Stories
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Student testimonials and career progression updates
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Dashboard Access
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Real-time monitoring of CSR fund allocation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tax Benefits (80G)
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Section 80G Approval:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Full deduction eligible for donations
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Section 12A Registered:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    No income tax on funds utilized for CSR
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>CSR Compliance:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Full CSR compliance and documentation support provided
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Certificate of Recognition:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Issued for CSR records and annual filings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Let's Partner Together
            </h2>
            <p className="text-gray-600 text-lg">
              Interested in sponsoring weSafe? Tell us about your CSR objectives
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Contact Person
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  CSR Budget Range
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select budget range</option>
                  <option>₹5,00,000 - ₹9,99,999</option>
                  <option>₹10,00,000 - ₹24,99,999</option>
                  <option>₹25,00,000 - ₹49,99,999</option>
                  <option>₹50,00,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tell us about your CSR objectives
                </label>
                <textarea
                  rows={4}
                  placeholder="What impact are you looking to create?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
            <p className="text-gray-700">
              Have questions? Contact our partnerships team at{" "}
              <a
                href="mailto:sponsors@wesafe.org"
                className="font-semibold text-blue-600 hover:underline"
              >
                sponsors@wesafe.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
