// ===========================================
// weSafe Platform - Sanity CMS Client
// ===========================================

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "9s0zgou2",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-04-01",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(sanityConfig);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return builder.image(source as any);
}

// ===========================================
// GROQ Queries
// ===========================================

export const blogPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  "category": category->title,
  "categorySlug": category->slug.current,
  "author": author->{name, role, image},
  mainImage
}`;

export const blogPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  publishedAt,
  readTime,
  "category": category->title,
  "categorySlug": category->slug.current,
  "author": author->{name, role, bio, image},
  mainImage,
  "relatedPosts": *[_type == "post" && category._ref == ^.category._ref && _id != ^._id][0..2] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "category": category->title,
    mainImage
  }
}`;

export const categoriesQuery = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`;

export const blogPostsByCategoryQuery = `*[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  "category": category->title,
  "author": author->{name, role, image},
  mainImage
}`;

// ===========================================
// Types
// ===========================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImage = any;

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  body?: Record<string, unknown>[];
  publishedAt: string;
  readTime?: string;
  category: string;
  categorySlug?: string;
  author: {
    name: string;
    role?: string;
    bio?: string;
    image?: SanityImage;
  };
  mainImage?: SanityImage;
  relatedPosts?: SanityPost[];
}

export interface SanityCategory {
  _id: string;
  title: string;
  slug: string;
  description?: string;
}

// ===========================================
// Fetch helpers
// ===========================================

export async function getAllPosts(): Promise<SanityPost[]> {
  return sanityClient.fetch(blogPostsQuery);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return sanityClient.fetch(blogPostBySlugQuery, { slug });
}

export async function getAllCategories(): Promise<SanityCategory[]> {
  return sanityClient.fetch(categoriesQuery);
}

export async function getPostsByCategory(categorySlug: string): Promise<SanityPost[]> {
  return sanityClient.fetch(blogPostsByCategoryQuery, { categorySlug });
}
