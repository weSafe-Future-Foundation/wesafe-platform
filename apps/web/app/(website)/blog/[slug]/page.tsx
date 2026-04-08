import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getAllPosts,
  urlFor,
  type SanityPost,
} from "@wesafe/sanity";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.map((post: SanityPost) => ({
      slug: post.slug.current,
    }));
  } catch {
    return [];
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple portable text renderer for Sanity block content
function RichTextBlock({ block }: { block: Record<string, unknown> }) {
  if (block._type === "image") {
    return (
      <figure className="my-8">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src={urlFor(block).width(1200).height(600).url()}
            alt={(block.alt as string) || "Blog image"}
            fill
            className="object-cover"
          />
        </div>
        {block.caption && (
          <figcaption className="text-center text-sm text-gray-500 mt-3">
            {block.caption as string}
          </figcaption>
        )}
      </figure>
    );
  }

  if (block._type === "code") {
    return (
      <pre className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto my-6">
        <code>{block.code as string}</code>
      </pre>
    );
  }

  if (block._type === "block") {
    const children = (block.children as Array<{ text: string; marks?: string[] }>) || [];
    const text = children.map((child) => child.text).join("");

    if (!text.trim()) return <br />;

    const renderInlineText = () =>
      children.map((child, i) => {
        let el: React.ReactNode = child.text;
        if (child.marks?.includes("strong")) el = <strong key={i}>{el}</strong>;
        if (child.marks?.includes("em")) el = <em key={i}>{el}</em>;
        if (child.marks?.includes("code"))
          el = (
            <code key={i} className="bg-gray-100 px-1.5 py-0.5 rounded text-sm">
              {el}
            </code>
          );
        return el;
      });

    switch (block.style) {
      case "h2":
        return (
          <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-4">
            {renderInlineText()}
          </h2>
        );
      case "h3":
        return (
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-3">
            {renderInlineText()}
          </h3>
        );
      case "h4":
        return (
          <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
            {renderInlineText()}
          </h4>
        );
      case "blockquote":
        return (
          <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 text-gray-700 italic text-lg">
            {renderInlineText()}
          </blockquote>
        );
      default:
        return (
          <p className="text-gray-700 leading-relaxed mb-4">
            {renderInlineText()}
          </p>
        );
    }
  }

  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post: SanityPost | null = null;
  try {
    post = await getPostBySlug(slug);
  } catch (error) {
    console.error("Failed to fetch post:", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero / Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
              {post.category}
            </span>
            {post.readTime && (
              <span className="text-blue-200 text-sm">{post.readTime}</span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            {post.title}
          </h1>

          <p className="text-lg text-blue-100 mb-8">{post.excerpt}</p>

          <div className="flex items-center gap-4">
            {post.author?.image && (
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                <Image
                  src={urlFor(post.author.image).width(96).height(96).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="font-semibold">{post.author?.name}</p>
              <p className="text-blue-200 text-sm">
                {post.author?.role && `${post.author.role} · `}
                {formatDate(post.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      {post.mainImage && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={urlFor(post.mainImage).width(1200).height(600).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Body */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {post.body ? (
          <div className="prose-custom">
            {(post.body as Record<string, unknown>[]).map(
              (block: Record<string, unknown>, i: number) => (
                <RichTextBlock key={i} block={block} />
              )
            )}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            This article&apos;s content is being prepared. Check back soon!
          </p>
        )}

        {/* Author Bio */}
        {post.author?.bio && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={urlFor(post.author.image).width(128).height(128).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="font-bold text-gray-900">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-sm text-blue-600 mb-2">
                    {post.author.role}
                  </p>
                )}
                <p className="text-gray-600 text-sm">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}
      </article>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {post.relatedPosts.map((related: SanityPost) => (
                <Link
                  key={related._id}
                  href={`/blog/${related.slug.current}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200">
                    {related.mainImage && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={urlFor(related.mainImage)
                            .width(400)
                            .height(250)
                            .url()}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-5">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {related.category}
                      </span>
                      <h3 className="text-base font-bold text-gray-900 mt-3 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {related.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-12 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Back to All Articles
        </Link>
      </section>
    </>
  );
}
