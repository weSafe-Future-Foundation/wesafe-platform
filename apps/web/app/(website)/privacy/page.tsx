import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for weSafe Future Foundation — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mb-12">
            Last updated: April 7, 2026
          </p>

          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                weSafe Future Foundation (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a
                Section 8 Non-Profit Organization registered under the Companies
                Act, 2013 (CIN: U88900UW2026NPL251138). We are committed to
                protecting your privacy and personal data. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website wesafefuture.org, use our
                mobile application, or interact with our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Personal Information:</strong> Name, email address, phone
                number, educational institution, city, and other details you
                provide when registering as a student, volunteer, sponsor, or
                donor.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>Usage Data:</strong> Information about how you interact
                with our website, including IP address, browser type, pages
                visited, and time spent on pages.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                <strong>Payment Information:</strong> When you make a donation,
                payment details are processed securely through our payment
                gateway partner (Razorpay). We do not store your complete card
                details on our servers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We use the information we collect to provide and maintain our
                services, process event registrations and donations, send you
                updates about events, programs, and opportunities, issue
                certificates and maintain leaderboards, improve our website and
                user experience, comply with legal obligations, and communicate
                with you about our foundation&apos;s activities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data Sharing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your data with trusted service providers
                (such as email delivery, payment processing, and cloud hosting)
                who assist us in operating our platform, and only to the extent
                necessary for them to provide their services. We may also
                disclose information if required by law or to protect the rights
                and safety of our foundation and its users.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your
                personal information, including encryption in transit (SSL/TLS),
                secure cloud infrastructure, and access controls. However, no
                method of transmission over the internet is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. You can control cookie
                preferences through your browser settings. Essential cookies
                required for the website to function cannot be disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You have the right to access, correct, or delete your personal
                information. You may also opt out of marketing communications at
                any time by clicking the unsubscribe link in our emails or
                contacting us directly. To exercise any of these rights, please
                email us at privacy@wesafefuture.org.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our programs serve students, some of whom may be minors. We
                collect only the minimum information necessary for event
                registration and program participation. Parental consent is
                required for participants under the age of 18.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated &quot;Last updated&quot; date.
                We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="mt-3 text-gray-600">
                <p className="font-semibold">weSafe Future Foundation</p>
                <p>Graphix Tower 2, A-13, Sector 62</p>
                <p>Noida, UP — 201301</p>
                <p className="mt-2">Email: privacy@wesafefuture.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
