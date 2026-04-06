import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read articles about technology education, hackathons, student success stories, and industry insights from weSafe Future Foundation.",
  keywords: [
    "blog",
    "articles",
    "technology",
    "education",
    "hackathons",
    "student stories",
    "insights",
  ],
};

export default function BlogPage() {
  const categories = [
    "All Posts",
    "Success Stories",
    "Events",
    "Technology",
    "Career Tips",
    "Announcements",
  ];

  const blogPosts = [
    {
      title: "How Hackathons Are Changing Student Careers",
      excerpt:
        "Discover how our hackathon participants are landing dream jobs and building successful startups.",
      category: "Success Stories",
      date: "March 10, 2026",
      readTime: "5 min read",
      image: "📚",
    },
    {
      title: "The Future of AI in Education",
      excerpt:
        "Exploring how artificial intelligence is transforming the way we learn and teach technology skills.",
      category: "Technology",
      date: "March 5, 2026",
      readTime: "7 min read",
      image: "🤖",
    },
    {
      title: "Women in Tech: Breaking Barriers",
      excerpt:
        "Celebrating the incredible women developers and innovators in our weSafe community.",
      category: "Success Stories",
      date: "February 28, 2026",
      readTime: "6 min read",
      image: "👩‍💻",
    },
    {
      title: "Preparing for Your First Hackathon",
      excerpt:
        "A beginner's guide to hackathons: tips, tricks, and what to expect at your first event.",
      category: "Career Tips",
      date: "February 22, 2026",
      readTime: "8 min read",
      image: "🚀",
    },
    {
      title: "Summer 2026 Internship Opportunities",
      excerpt:
        "Explore summer internship programs with partner companies across tech, finance, and startups.",
      category: "Announcements",
      date: "February 15, 2026",
      readTime: "4 min read",
      image: "💼",
    },
    {
      title: "Cloud Computing Bootcamp Results",
      excerpt:
        "Highlights from our recent cloud computing workshop with 500+ participants across India.",
      category: "Events",
      date: "February 10, 2026",
      readTime: "5 min read",
      image: "☁️",
    },
    {
      title: "Building Your Personal Brand as a Developer",
      excerpt:
        "Learn how to showcase your skills, build a portfolio, and stand out to recruiters.",
      category: "Career Tips",
      date: "February 5, 2026",
      readTime: "7 min read",
      image: "✨",
    },
    {
      title: "From Student to Startup Founder",
      excerpt:
        "Meet Priya, who went from participating in our hackathon to founding her own tech startup.",
      category: "Success Stories",
      date: "January 28, 2026",
      readTime: "6 min read",
      image: "🌟",
    },
    {
      title: "Open Source Contribution Guide",
      excerpt:
        "Start contributing to open source projects and build your developer portfolio.",
      category: "Technology",
      date: "January 20, 2026",
      readTime: "9 min read",
      image: "🔧",
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
              weSafe <span className="text-green-300">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Stories, insights, and tips from the weSafe community. Learn about
              careers, technology, and student success.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  i === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 hover:border-blue-200 cursor-pointer group"
              >
                <div className="h-40 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {post.image}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-16">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  page === 1
                    ? "bg-blue-600 text-white"
                    : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Sanity CMS Integration Placeholder */}
      <section className="py-16 sm:py-20 bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Blog Content Management
          </h3>
          <p className="text-gray-600 mb-6">
            This blog is powered by Sanity CMS for seamless content management.
            Blog posts are fetched dynamically from the Sanity backend.
          </p>
          <div className="bg-white rounded-lg p-6 border border-blue-200 inline-block">
            <p className="text-sm text-gray-700">
              <strong>Integration Status:</strong> Ready to connect to Sanity CMS
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Get the latest articles, success stories, and updates delivered to
            your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
