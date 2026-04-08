"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  name: "wesafe-blog",
  title: "weSafe Future Blog",
  projectId: "9s0zgou2",
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [
      {
        name: "post",
        title: "Blog Post",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
          },
          {
            name: "author",
            title: "Author",
            type: "reference",
            to: [{ type: "author" }],
          },
          {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
          },
          {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
          },
          {
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
          },
          {
            name: "readTime",
            title: "Read Time",
            type: "string",
          },
          {
            name: "body",
            title: "Body",
            type: "array",
            of: [
              {
                type: "block",
                styles: [
                  { title: "Normal", value: "normal" },
                  { title: "H2", value: "h2" },
                  { title: "H3", value: "h3" },
                  { title: "H4", value: "h4" },
                  { title: "Quote", value: "blockquote" },
                ],
              },
              {
                type: "image",
                options: { hotspot: true },
                fields: [
                  { name: "alt", type: "string", title: "Alt Text" },
                  { name: "caption", type: "string", title: "Caption" },
                ],
              },
              {
                name: "code",
                title: "Code Block",
                type: "object",
                fields: [
                  { name: "language", type: "string", title: "Language" },
                  { name: "code", type: "text", title: "Code" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "author",
        title: "Author",
        type: "document",
        fields: [
          {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: "role",
            title: "Role",
            type: "string",
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
          },
          {
            name: "bio",
            title: "Bio",
            type: "text",
          },
        ],
      },
      {
        name: "category",
        title: "Category",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule: any) => Rule.required(),
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
          },
          {
            name: "description",
            title: "Description",
            type: "text",
          },
        ],
      },
    ],
  },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
