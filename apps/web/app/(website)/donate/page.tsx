import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support weSafe Future Foundation with a donation. Tax-deductible donations help us empower more students. Calculate your impact.",
  keywords: [
    "donate",
    "donation",
    "tax deductible",
    "80G",
    "impact",
    "support",
  ],
};

export default function DonatePage() {
  const donationAmounts = [
    { amount: 500, description: "Hackathon Kit" },
    { amount: 1000, description: "Workshop Materials" },
    { amount: 2500, description: "Internship Sponsorship" },
    { amount: 5000, description: "Mentorship Program" },
    { amount: 10000, description: "Event Sponsorship" },
    { amount: 25000, description: "Annual Support" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Make a <span className="text-green-300">Difference</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Your donation helps us reach more students and create opportunities
              through technology education
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Impact
            </h2>
            <p className="text-gray-600 text-lg">
              See what your donation can accomplish
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                amount: "₹500",
                impact: "Hackathon Kit",
                description: "Coding bootcamp materials for 1 student",
                icon: "📦",
              },
              {
                amount: "₹1,000",
                impact: "Workshop Access",
                description: "Full workshop registration for 1 student",
                icon: "🎓",
              },
              {
                amount: "₹2,500",
                impact: "Mentorship",
                description: "1-on-1 mentoring program for 1 student",
                icon: "👨‍🏫",
              },
              {
                amount: "₹5,000",
                impact: "Internship Support",
                description: "Internship opportunity and guidance",
                icon: "💼",
              },
              {
                amount: "₹10,000",
                impact: "Event Sponsorship",
                description: "Support for organizing a hackathon",
                icon: "🎉",
              },
              {
                amount: "₹25,000",
                impact: "Scholarship",
                description: "Full scholarship support for 5 students",
                icon: "🎖️",
              },
              {
                amount: "₹50,000",
                impact: "Program Support",
                description: "Support for an entire regional program",
                icon: "🌍",
              },
              {
                amount: "Custom",
                impact: "Your Impact",
                description: "Choose a custom amount",
                icon: "💝",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-green-50 hover:from-blue-100 hover:to-green-100 transition-colors"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.impact}
                </h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {item.amount}
                </p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Select Donation Method
            </h2>
            <p className="text-gray-600 text-lg">
              Choose the way that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Razorpay Coming Soon */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <div className="text-4xl mb-3">💳</div>
                <h3 className="text-xl font-bold">Card Payment</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Pay securely with your credit or debit card
                </p>
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-6">
                  <p className="text-yellow-800 font-semibold text-sm">
                    Coming Soon
                  </p>
                  <p className="text-yellow-700 text-xs mt-1">
                    Razorpay integration launching soon
                  </p>
                </div>
                <button
                  disabled
                  className="w-full px-4 py-3 bg-gray-300 text-gray-600 font-semibold rounded-lg cursor-not-allowed"
                >
                  Currently Unavailable
                </button>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-green-300">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                <div className="text-4xl mb-3">🏦</div>
                <h3 className="text-xl font-bold">Bank Transfer</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Transfer directly to our bank account
                </p>
                <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                  <div>
                    <p className="text-xs text-gray-600">Account Holder</p>
                    <p className="font-semibold text-gray-900">
                      weSafe Future Foundation
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Bank Details</p>
                    <p className="font-semibold text-gray-900">
                      Details will be available once our bank account is set up. Please contact us at donate@wesafefuture.org for any donation inquiries.
                    </p>
                  </div>
                </div>
                <button className="w-full mt-6 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                  View Full Details
                </button>
              </div>
            </div>

            {/* UPI Payment */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-2 border-purple-300">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-bold">UPI Payment</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6">
                  Quick and easy donation via UPI
                </p>
                <div className="bg-purple-50 rounded-lg p-6 flex flex-col items-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📲</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-2">UPI ID</p>
                  <p className="font-mono text-lg font-bold text-gray-900">
                    wesafe@upi
                  </p>
                </div>
                <button className="w-full px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                  Copy UPI ID
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recurring Donation Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Set Up Monthly Giving
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Become a monthly donor and create a sustained impact. With
                monthly giving, you can support students year-round and help us
                plan bigger initiatives.
              </p>

              <div className="space-y-4">
                {[
                  "Set your own donation amount",
                  "Cancel anytime with no fees",
                  "Get monthly impact reports",
                  "Tax deduction on all donations",
                  "Exclusive monthly updates",
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                Start Monthly Giving
              </button>
            </div>

            <div className="bg-green-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Monthly Giving Options
              </h3>
              <div className="space-y-3">
                {[250, 500, 1000, 2500, 5000].map((amount) => (
                  <button
                    key={amount}
                    className="w-full px-4 py-3 text-left border-2 border-green-300 rounded-lg hover:bg-green-100 transition-colors font-semibold text-gray-900"
                  >
                    ₹{amount} per month
                  </button>
                ))}
                <button className="w-full px-4 py-3 text-left border-2 border-green-300 rounded-lg hover:bg-green-100 transition-colors font-semibold text-gray-900">
                  Custom amount
                </button>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border border-green-200">
                <p className="text-sm text-gray-600">
                  <strong>💡 Pro Tip:</strong> Monthly donors get recognized on
                  our annual impact report and exclusive updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Calculator Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Impact Calculator
            </h2>
            <p className="text-gray-600 text-lg">
              See the tangible impact of your donation
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-10">
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Donation Amount
              </label>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900">₹</span>
                <input
                  type="number"
                  defaultValue="5000"
                  className="flex-1 px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
                />
              </div>
            </div>

            <div className="space-y-4 bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">Your Impact:</h3>

              <div className="flex items-center justify-between py-3 border-b border-blue-200">
                <span className="text-gray-700">Students Helped</span>
                <span className="font-bold text-blue-600 text-lg">1-2</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-blue-200">
                <span className="text-gray-700">Hackathon Registrations</span>
                <span className="font-bold text-blue-600 text-lg">5-10</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-blue-200">
                <span className="text-gray-700">Workshop Hours</span>
                <span className="font-bold text-blue-600 text-lg">8-16</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="text-gray-700">Mentoring Sessions</span>
                <span className="font-bold text-blue-600 text-lg">3-5</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600 text-center">
              *Impact estimates based on average program costs and delivery
            </p>
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tax Benefits
            </h2>
            <p className="text-gray-600 text-lg">
              Make your donation and save on taxes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-green-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Section 80G Benefits
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Tax Deduction:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">Up to 50% of GTI</p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>For Super Rich (&gt;50L GTI):</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Up to 100% of GTI
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Eligible Donors:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Individuals filing ITR
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Claim deduction in the financial year
                  when donation is made
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Documentation Provided
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Receipt Number:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Instant receipt with unique ID
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>80G Certificate:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Emailed within 48 hours
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-gray-600 mb-1">
                    <strong>Annual Summary:</strong>
                  </p>
                  <p className="text-gray-900 font-semibold">
                    Consolidated statement for tax filing
                  </p>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Learn More about Tax Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Donation FAQs
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "Is my donation tax-deductible?",
                answer:
                  "Yes! weSafe Future Foundation is registered under Section 12A and approved under Section 80G. Donors can claim deduction up to 50% of their Gross Total Income.",
              },
              {
                question: "Which payment methods do you accept?",
                answer:
                  "We currently accept Bank Transfers and UPI payments. Razorpay integration for card payments is coming soon.",
              },
              {
                question: "Can I get a receipt for my donation?",
                answer:
                  "Yes, an instant receipt is provided with every donation along with your 80G certificate within 48 hours.",
              },
              {
                question: "Can I specify how my donation is used?",
                answer:
                  "You can choose to support specific programs like hackathons, scholarships, or mentorship. Our team will work with you on this.",
              },
              {
                question: "Do you offer monthly giving?",
                answer:
                  "Yes! Monthly giving is a great way to sustain your impact. You can set your own amount and cancel anytime.",
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
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Your donation, no matter the size, helps us empower the next
            generation of innovators.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg">
            Donate Now (Coming Soon)
          </button>
        </div>
      </section>
    </>
  );
}
