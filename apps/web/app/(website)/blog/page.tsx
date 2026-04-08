import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getAllPosts,
  getAllCategories,
  urlFor,
  type SanityPost,
  type SanityCategory,
} from "@wesafe/sanity";

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

// Revalidate every 60 seconds for fresh content
export const revalidate = 60;

// Fallback static posts when Sanity has no content yet
const fallbackPosts = [
  {
    _id: "1",
    title: "How Hackathons Are Changing Student Careers",
    slug: { current: "hackathons-changing-student-careers" },
    excerpt:
      "Discover how our hackathon participants are landing dream jobs and building successful startups.",
    category: "Success Stories",
    publishedAt: "2026-03-10T00:00:00Z",
    readTime: "5 min read",
    author: { name: "weSafe Team" },
    image: "📚",
  },
  {
    _id: "2",
    title: "The Future of AI in Education",
    slug: { current: "future-of-ai-in-education" },
    excerpt:
      "Exploring how artificial intelligence is transforming the way we learn and teach technology skills.",
    category: "Technology",
    publishedAt: "2026-03-05T00:00:00Z",
    readTime: "7 min read",
    author: { name: "weSafe Team" },
    image: "🤖",
  },
  {
    _id: "3",
    title: "Women in Tech: Breaking Barriers",
    slug: { current: "women-in-tech-breaking-barriers" },
    excerpt:
      "Celebrating the incredible women developers and innovators in our weSafe community.",
    category: "Success Stories",
    publishedAt: "2026-02-28T00:00:00Z",
    readTime: "6 min read",
    author: { name: "weSafe Team" },
    image: "👩‍💻",
  },
  {
    _id: "4",
    title: "Preparing for Your First Hackathon",
    slug: { current: "preparing-for-first-hackathon" },
    excerpt:
      "A beginner's guide to hackathons: tips, tricks, and what to expect at your first event.",
    category: "Career Tips",
    publishedAt: "2026-02-22T00:00:00Z",
    readTime: "8 min read",
    author: { name: "weSafe Team" },
    image: "🚀",
  },
  {
    _id: "5",
    title: "Summer 2026 Internship Opportunities",
    slug: { current: "summer-2026-internship-opportunities" },
    excerpt:
      "Explore summer internship programs with partner companies across tech, finance, and startups.",
    category: "Announcements",
    publishedAt: "2026-02-15T00:00:00Z",
    readTime: "4 min read",
    author: { name: "weSafe Team" },
    image: "💼",
  },
  {
    _id: "6",
    title: "Cloud Computing Bootcamp Results",
    slug: { current: "cloud-computing-bootcamp-results" },
    excerpt:
      "Highlights from our recent cloud computing workshop with 500+ participants across India.",
    category: "Events",
    publishedAt: "2026-02-10T00:00:00Z",
    readTime: "5 min read",
    author: { name: "weSafe Team" },
    image: "☁️",
  },
  {
    _id: "7",
    title: "Building Your Personal Brand as a Developer",
    slug: { current: "building-personal-brand-developer" },
    excerpt:
      "Learn how to showcase your skills, build a portfolio, and stand out to recruiters.",
    category: "Career Tips",
    publishedAt: "2026-02-05T00:00:00Z",
    readTime: "7 min read",
    author: { name: "weSafe Team" },
    image: "✨",
  },
  {
    _id: "8",
    title: "From Student to Startup Founder",
    slug: { current: "from-student-to-startup-founder" },
    excerpt:
      "Meet Priya, who went from participating in our hackathon to founding her own tech startup.",
    category: "Success Stories",
    publishedAt: "2026-01-28T00:00:00Z",
    readTime: "6 min read",
    author: { name: "weSafe Team" },
    image: "🌟",
  },
  {
    _id: "9",
    title: "Open Source Contribution Guide",
    slug: { current: "open-source-contribution-guide" },
    excerpt:
      "Start contributing to open source projects and build your developer portfolio.",
    category: "Technology",
    publishedAt: "2026-01-20T00:00:00Z",
    readTime: "9 min read",
    author: { name: "weSafe Team" },
    image: "🔧",
  },
];

const fallbackCategories = [
  "All Posts",
  "Success Stories",
  "Events",
  "Technology",
  "Career Tips",
  "Announcements",
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostCard({
  post,
  useSanityImage,
}: {
  post: SanityPost | (typeof fallbackPosts)[0];
  useSanityImage: boolean;
}) {
  const isSanity = useSanityImage && "mainImage" in post && post.mainImage;
  const slug = post.slug.current;

  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-200 hover:border-blue-200 cursor-pointer group h-full flex flex-col">
        {isSanity ? (
          <div className="h-48 relative overflow-hidden">
            <Image
              src={urlFor(post.mainImage).width(600).height(400).url()}
              alt={(post as SanityPost).title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
            {"image" in post ? (post as (typeof fallbackPosts)[0]).image : "📝"}
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
              {post.category}
            </span>
            {post.readTime && (
              <span className="text-xs text-gray-500">{post.readTime}</span>
            )}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <span className="text-xs text-gray-500">
              {formatDate(post.publishedAt)}
            </span>
            <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700">
              Read More →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default async function BlogPage() {
  // Fetch from Sanity CMS
  let sanityPosts: SanityPost[] = [];
  let sanityCategories: SanityCategory[] = [];

  try {
    [sanityPosts, sanityCategories] = await Promise.all([
      getAllPosts(),
      getAllCategories(),
    ]);
  } catch (error) {
    console.error("Failed to fetch from Sanity:", error);
  }

  const hasSanityContent = sanityPosts.length > 0;
  const posts = hasSanityContent ? sanityPosts : fallbackPosts;
  const categories = hasSanityContent
    ? [
        "All Posts",
        ...sanityCategories.map((c: SanityCategory) => c.title),
      ]
    : fallbackCategories;

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

      {/* Category Filter Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, i) => (
              <span
                key={i}
                className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                  i === 0
                    ? "bg-blue-600 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post._id}
                post={post}
                useSanityImage={hasSanityContent}
              />
            ))}
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
