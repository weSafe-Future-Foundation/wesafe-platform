import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for weSafe Future Foundation — rules and guidelines for using our platform and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-500 mb-12">
            Last updated: April 7, 2026
          </p>

          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the weSafe Future Foundation website
                (wesafefuture.org), mobile application, or any of our services,
                you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services. weSafe
                Future Foundation is a Section 8 Non-Profit Organization
                registered under the Companies Act, 2013 (CIN:
                U88900UW2026NPL251138).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Our Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                weSafe Future Foundation provides a platform for students,
                volunteers, sponsors, and donors to participate in hackathons,
                workshops, technology education programs, and community
                initiatives across India. Our services include event
                registration, community participation, donation processing,
                certificate issuance, and educational content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Accounts
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To access certain features, you may need to create an account.
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. You agree to provide accurate and complete information
                during registration and to update your information as needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Code of Conduct
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All participants in weSafe programs and events agree to maintain
                respectful and professional behavior, not engage in harassment,
                discrimination, or harmful conduct, respect intellectual
                property rights, follow event-specific rules and guidelines, and
                not use the platform for any unlawful purpose. We reserve the
                right to suspend or terminate access for any user who violates
                these guidelines.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Donations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All donations made through our platform are voluntary and
                non-refundable unless otherwise stated. Donation receipts and 80G
                certificates will be issued in accordance with applicable Indian
                tax laws. weSafe Future Foundation is approved under Section 12A
                and Section 80G of the Income Tax Act, 1961.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on the weSafe Future Foundation website, including
                text, graphics, logos, images, and software, is the property of
                weSafe Future Foundation or its licensors and is protected by
                applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works from our content without
                prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Event Participation
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Registration for events is subject to availability. We reserve
                the right to modify event schedules, venues, or formats at our
                discretion. By participating in our events, you grant weSafe
                Future Foundation permission to use photographs and videos taken
                during the event for promotional and educational purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                weSafe Future Foundation provides its services on an &quot;as
                is&quot; basis. We make no warranties, express or implied, regarding
                the accuracy, reliability, or availability of our services. To
                the fullest extent permitted by law, we shall not be liable for
                any indirect, incidental, or consequential damages arising from
                your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service are governed by the laws of India. Any
                disputes arising from these terms shall be subject to the
                exclusive jurisdiction of the courts in Noida, Uttar Pradesh,
                India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be posted on this page with an updated date.
                Continued use of our services after changes are posted
                constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="mt-3 text-gray-600">
                <p className="font-semibold">weSafe Future Foundation</p>
                <p>Graphix Tower 2, A-13, Sector 62</p>
                <p>Noida, UP — 201301</p>
                <p className="mt-2">Email: hello@wesafefuture.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
