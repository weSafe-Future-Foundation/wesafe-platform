import Link from "next/link";

const footerLinks = {
  Foundation: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Programs: [
    { name: "Events", href: "/events" },
    { name: "Community", href: "/community/dashboard" },
    { name: "Leaderboard", href: "/community/leaderboard" },
    { name: "Certificates", href: "/community/certificates" },
  ],
  Support: [
    { name: "Donate", href: "/donate" },
    { name: "Sponsor Us", href: "/sponsors" },
    { name: "Volunteer", href: "/join" },
    { name: "FAQ", href: "/contact#faq" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold">
                <span className="text-blue-400">we</span>
                <span className="text-green-400">Safe</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400">
              Care Today, Sustain Tomorrow
            </p>
            <p className="mt-2 text-sm text-gray-400">
              W.E.S.A.F.E
              <br />
              Water . Earth . Space . Air . Fire . Energy
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Section 8 Non-Profit Organization
              <br />
              Graphix Tower 2, A-13, Sector 62
              <br />
              Noida, UP — 201301
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} weSafe Future Foundation. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
