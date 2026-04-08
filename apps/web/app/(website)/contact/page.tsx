import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with weSafe Future Foundation. Find our regional offices, contact details, social media, and FAQs.",
  keywords: [
    "contact",
    "support",
    "office locations",
    "regional offices",
    "social media",
    "FAQ",
  ],
};

export default function ContactPage() {
  const offices = [
    {
      region: "Headquarters",
      city: "Delhi",
      address: "Graphix Tower 2, A-13, Sector 62, Noida, UP — 201301",
      phone: "+91 XXXX-XXXX-XX",
      email: "info@wesafefuture.org",
      icon: "🏢",
    },
    {
      region: "South Region",
      city: "Bangalore",
      address: "Bangalore Office — Coming Soon",
      phone: "+91 XXXX-XXXX-XX",
      email: "south@wesafefuture.org",
      icon: "📍",
    },
    {
      region: "West Region",
      city: "Mumbai",
      address: "Mumbai Office — Coming Soon",
      phone: "+91 XXXX-XXXX-XX",
      email: "west@wesafefuture.org",
      icon: "📍",
    },
    {
      region: "East Region",
      city: "Kolkata",
      address: "Kolkata Office — Coming Soon",
      phone: "+91 XXXX-XXXX-XX",
      email: "east@wesafefuture.org",
      icon: "📍",
    },
    {
      region: "Central Region",
      city: "Indore",
      address: "Indore Office — Coming Soon",
      phone: "+91 XXXX-XXXX-XX",
      email: "central@wesafefuture.org",
      icon: "📍",
    },
    {
      region: "Northeast Region",
      city: "Guwahati",
      address: "Guwahati Office — Coming Soon",
      phone: "+91 XXXX-XXXX-XX",
      email: "northeast@wesafefuture.org",
      icon: "📍",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/wesafe-future-foundation", icon: "💼" },
    { name: "Facebook", url: "https://www.facebook.com/people/WeSafe-Future/61574247237807/", icon: "👍" },
  ];

  const contactReasons = [
    {
      title: "General Inquiry",
      email: "info@wesafefuture.org",
      description: "Questions about weSafe and our programs",
    },
    {
      title: "Event Registration",
      email: "events@wesafefuture.org",
      description: "Register for hackathons and workshops",
    },
    {
      title: "Sponsorship & CSR",
      email: "sponsors@wesafefuture.org",
      description: "Corporate partnerships and CSR initiatives",
    },
    {
      title: "Volunteering",
      email: "volunteers@wesafefuture.org",
      description: "Join our mentor and volunteer network",
    },
    {
      title: "Career Opportunities",
      email: "careers@wesafefuture.org",
      description: "Job openings at weSafe Foundation",
    },
    {
      title: "Technical Support",
      email: "support@wesafefuture.org",
      description: "Website and platform issues",
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
              Get in <span className="text-green-300">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Have a question? We'd love to hear from you. Reach out to us
              through any of these channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Contact Channel
            </h2>
            <p className="text-gray-600 text-lg">
              Pick the best way to reach us based on your inquiry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactReasons.map((reason, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200 p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{reason.description}</p>
                <a
                  href={`mailto:${reason.email}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
                >
                  {reason.email} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p className="text-gray-600 text-lg">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Regional Offices Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Regional Offices
            </h2>
            <p className="text-gray-600 text-lg">
              Visit us at any of our offices across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200 p-8"
              >
                <div className="text-4xl mb-4">{office.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {office.region}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">{office.city}</p>

                <div className="space-y-3 text-gray-600 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Address</p>
                    <p>{office.address}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Phone</p>
                    <a
                      href={`tel:${office.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Email</p>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-blue-600 hover:underline break-all"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                <button className="w-full mt-6 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Get Directions
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Connect With Us Online
            </h2>
            <p className="text-gray-600 text-lg">
              Follow us on social media for updates, news, and community stories
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all min-w-[140px]"
              >
                <span className="text-4xl">{link.icon}</span>
                <span className="font-semibold text-gray-900 text-sm text-center">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "What are your office hours?",
                answer:
                  "Most of our offices are open Monday to Friday, 10 AM to 6 PM IST. For specific timings, please check the respective regional office details above.",
              },
              {
                question: "How quickly will I get a response?",
                answer:
                  "We aim to respond to all inquiries within 24 business hours. For urgent matters, please call our headquarters.",
              },
              {
                question: "Can I visit your office without an appointment?",
                answer:
                  "It's recommended to schedule an appointment beforehand. Contact your nearest regional office to book a visit.",
              },
              {
                question: "Do you have online support?",
                answer:
                  "Yes! You can chat with us on our Discord community, email us, or submit a contact form. We also have phone support during business hours.",
              },
              {
                question: "Which office should I contact for my inquiry?",
                answer:
                  "For general inquiries, contact our headquarters. For regional matters, reach out to your nearest office. Use the contact form above to select the appropriate department.",
              },
              {
                question: "Can I schedule a call or video meeting?",
                answer:
                  "Absolutely! Email the relevant department from the contact reasons section, and we'll schedule a meeting at a time convenient for you.",
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

      {/* Map Placeholder Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Find Us on the Map
            </h2>
            <p className="text-gray-600 text-lg">
              We're spread across major cities in India
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-12 aspect-video flex items-center justify-center border-2 border-dashed border-blue-300">
            <div className="text-center">
              <p className="text-2xl mb-3">🗺️</p>
              <p className="text-gray-700 font-semibold">
                Interactive map coming soon
              </p>
              <p className="text-gray-600 text-sm mt-2">
                View all our office locations on an interactive map
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl mb-3">📧</p>
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">info@wesafefuture.org</p>
            </div>
            <div>
              <p className="text-4xl mb-3">📞</p>
              <h3 className="text-lg font-bold mb-2">Call Us</h3>
              <p className="text-blue-100">+91 XXXX-XXXX-XX</p>
            </div>
            <div>
              <p className="text-4xl mb-3">🕐</p>
              <h3 className="text-lg font-bold mb-2">Support Hours</h3>
              <p className="text-blue-100">Mon-Fri, 10 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
