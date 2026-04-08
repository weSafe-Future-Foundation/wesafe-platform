/**
 * Seed script to populate Sanity with sample blog content.
 * Usage: SANITY_TOKEN=<your-write-token> node libs/sanity/seed.mjs
 *
 * Get a write token from: https://www.sanity.io/manage/project/9s0zgou2/api#tokens
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "9s0zgou2",
  dataset: "production",
  apiVersion: "2026-04-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

const authors = [
  {
    _type: "author",
    _id: "author-badan",
    name: "Badan Singh",
    role: "Founder",
    bio: "Founder of weSafe Future Foundation, passionate about technology education and empowering students across India.",
  },
  {
    _type: "author",
    _id: "author-wesafe-team",
    name: "weSafe Team",
    role: "Content Team",
    bio: "The weSafe Future Foundation content team covers technology, education, and student success stories.",
  },
];

const categories = [
  {
    _type: "category",
    _id: "cat-success-stories",
    title: "Success Stories",
    slug: { _type: "slug", current: "success-stories" },
    description: "Inspiring stories from the weSafe community",
  },
  {
    _type: "category",
    _id: "cat-technology",
    title: "Technology",
    slug: { _type: "slug", current: "technology" },
    description: "Latest technology trends and insights",
  },
  {
    _type: "category",
    _id: "cat-events",
    title: "Events",
    slug: { _type: "slug", current: "events" },
    description: "Updates from weSafe events and hackathons",
  },
  {
    _type: "category",
    _id: "cat-career-tips",
    title: "Career Tips",
    slug: { _type: "slug", current: "career-tips" },
    description: "Career guidance for students and professionals",
  },
  {
    _type: "category",
    _id: "cat-announcements",
    title: "Announcements",
    slug: { _type: "slug", current: "announcements" },
    description: "Official announcements from weSafe Future Foundation",
  },
];

const posts = [
  {
    _type: "post",
    _id: "post-hackathons-changing-careers",
    title: "How Hackathons Are Changing Student Careers",
    slug: { _type: "slug", current: "hackathons-changing-student-careers" },
    excerpt:
      "Discover how our hackathon participants are landing dream jobs and building successful startups.",
    author: { _type: "reference", _ref: "author-wesafe-team" },
    category: { _type: "reference", _ref: "cat-success-stories" },
    publishedAt: "2026-03-10T10:00:00Z",
    readTime: "5 min read",
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "In the past year, over 500 students participated in weSafe-organized hackathons across India. The results have been remarkable — with participants going on to secure internships at leading tech companies, launch their own startups, and contribute to open-source projects that impact millions.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "The Power of 48 Hours" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Hackathons compress months of learning into a single weekend. Teams form, ideas take shape, and prototypes come to life — all within 48 hours. This intense environment pushes participants beyond their comfort zones and into a space where real innovation happens.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b4",
        style: "h2",
        children: [
          { _type: "span", _key: "s4", text: "Skills That Matter" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Beyond coding, hackathons teach teamwork, time management, presentation skills, and creative problem-solving. These soft skills are exactly what employers look for when hiring fresh graduates. Our post-hackathon surveys show that 78% of participants felt more confident in technical interviews after their first event.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b6",
        style: "blockquote",
        children: [
          {
            _type: "span",
            _key: "s6",
            text: '"The hackathon changed how I approach problems. I learned to build fast, fail fast, and iterate — skills I use every day at work now." — Rahul, Hackathon 2025 Winner',
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b7",
        style: "h2",
        children: [
          { _type: "span", _key: "s7", text: "Join the Next One" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b8",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s8",
            text: "Our next hackathon is scheduled for June 2026 as part of the weSafe Future Summit. Whether you are a first-time coder or an experienced developer, there is a place for you. Registration opens soon — follow us on LinkedIn and subscribe to our newsletter to stay updated.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: "post",
    _id: "post-future-of-ai",
    title: "The Future of AI in Education",
    slug: { _type: "slug", current: "future-of-ai-in-education" },
    excerpt:
      "Exploring how artificial intelligence is transforming the way we learn and teach technology skills.",
    author: { _type: "reference", _ref: "author-badan" },
    category: { _type: "reference", _ref: "cat-technology" },
    publishedAt: "2026-03-05T10:00:00Z",
    readTime: "7 min read",
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Artificial intelligence is no longer a futuristic concept — it is reshaping education right now. From personalized learning paths to AI-powered tutoring, the tools available to students today would have been unimaginable just five years ago.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "Personalized Learning at Scale" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Every student learns differently. AI can analyze learning patterns and adapt content delivery to match individual needs. At weSafe, we are exploring how to integrate AI-powered learning assistants into our bootcamp programs to help students learn at their own pace while still meeting curriculum goals.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b4",
        style: "h2",
        children: [
          { _type: "span", _key: "s4", text: "The Human Element" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "While AI can handle content delivery and assessment, the human element remains irreplaceable. Mentorship, emotional support, and collaborative learning are areas where human teachers excel. The future lies in a hybrid approach — AI handling the scalable aspects of education while humans focus on what they do best.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b6",
        style: "h2",
        children: [
          {
            _type: "span",
            _key: "s6",
            text: "What This Means for India",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b7",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "India has over 250 million students. Providing quality education to every single one is a monumental challenge. AI can help bridge the gap — bringing world-class instruction to students in remote areas, providing real-time translation across languages, and making education truly accessible to all. This is the mission that drives everything we do at weSafe Future Foundation.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: "post",
    _id: "post-women-in-tech",
    title: "Women in Tech: Breaking Barriers",
    slug: { _type: "slug", current: "women-in-tech-breaking-barriers" },
    excerpt:
      "Celebrating the incredible women developers and innovators in our weSafe community.",
    author: { _type: "reference", _ref: "author-wesafe-team" },
    category: { _type: "reference", _ref: "cat-success-stories" },
    publishedAt: "2026-02-28T10:00:00Z",
    readTime: "6 min read",
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "The tech industry has long struggled with gender diversity. At weSafe Future Foundation, we are committed to changing that narrative — one workshop, one hackathon, and one mentorship at a time. Here are some of the incredible women who are making waves in our community.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "Closing the Gender Gap" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Women make up only 26% of the tech workforce in India. Our programs specifically target this gap through dedicated women-in-tech bootcamps, scholarships, and mentorship programs. In our last cohort, 45% of participants were women — nearly double the industry average.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b4",
        style: "blockquote",
        children: [
          {
            _type: "span",
            _key: "s4",
            text: '"I never thought I could be a developer. weSafe showed me it was possible and gave me the support to make it happen." — Ananya, Full Stack Developer',
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "We believe that when we empower women in technology, we do not just change individual lives — we transform entire communities. Our goal is to train 10,000 women developers by 2028, and with the support of our partners and community, we are well on our way.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: "post",
    _id: "post-preparing-first-hackathon",
    title: "Preparing for Your First Hackathon",
    slug: { _type: "slug", current: "preparing-for-first-hackathon" },
    excerpt:
      "A beginner's guide to hackathons: tips, tricks, and what to expect at your first event.",
    author: { _type: "reference", _ref: "author-badan" },
    category: { _type: "reference", _ref: "cat-career-tips" },
    publishedAt: "2026-02-22T10:00:00Z",
    readTime: "8 min read",
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Your first hackathon can feel overwhelming, but with the right preparation, it can also be one of the most rewarding experiences of your student life. Here is everything you need to know before your first event.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "Before the Event" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "Form your team early — ideally 3 to 4 people with complementary skills. Have at least one person comfortable with frontend, one with backend, and one who can handle design and presentations. Set up your development environment beforehand: install your IDE, have Git configured, and make sure everyone has the same tools ready to go.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b4",
        style: "h2",
        children: [
          { _type: "span", _key: "s4", text: "During the Hackathon" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b5",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s5",
            text: "Start with a clear problem statement. Spend the first hour brainstorming and narrowing down your idea. Build an MVP first — judges care more about a working demo than a perfect codebase. Take breaks, stay hydrated, and remember: it is a marathon, not a sprint.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b6",
        style: "h2",
        children: [
          { _type: "span", _key: "s6", text: "The Presentation" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b7",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s7",
            text: "Your pitch is just as important as your code. Practice your demo multiple times. Lead with the problem you are solving, show your solution in action, and explain the potential impact. Keep it under 3 minutes and leave time for questions. A confident, clear presentation can make all the difference.",
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: "post",
    _id: "post-cloud-computing-bootcamp",
    title: "Cloud Computing Bootcamp Results",
    slug: { _type: "slug", current: "cloud-computing-bootcamp-results" },
    excerpt:
      "Highlights from our recent cloud computing workshop with 500+ participants across India.",
    author: { _type: "reference", _ref: "author-wesafe-team" },
    category: { _type: "reference", _ref: "cat-events" },
    publishedAt: "2026-02-10T10:00:00Z",
    readTime: "5 min read",
    body: [
      {
        _type: "block",
        _key: "b1",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s1",
            text: "Our three-day cloud computing bootcamp wrapped up last week with incredible results. Over 500 participants from 45 cities joined us virtually to learn AWS, Azure, and Google Cloud fundamentals — completely free of charge.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b2",
        style: "h2",
        children: [
          { _type: "span", _key: "s2", text: "By the Numbers" },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b3",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s3",
            text: "523 registered participants, 89% completion rate, 45 cities represented, and a 4.8/5 average satisfaction score. These numbers tell a powerful story about the hunger for cloud computing education among Indian students.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "b4",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "s4",
            text: "Participants built real projects including a serverless API, a deployed web application, and a CI/CD pipeline. Each project was reviewed by industry mentors who provided personalized feedback. Stay tuned for our next bootcamp announcement — we are planning something even bigger for summer 2026.",
          },
        ],
        markDefs: [],
      },
    ],
  },
];

async function seed() {
  console.log("🌱 Seeding Sanity with sample blog content...\n");

  // Create authors
  for (const author of authors) {
    try {
      await client.createOrReplace(author);
      console.log(`✅ Author: ${author.name}`);
    } catch (err) {
      console.error(`❌ Author ${author.name}:`, err.message);
    }
  }

  // Create categories
  for (const category of categories) {
    try {
      await client.createOrReplace(category);
      console.log(`✅ Category: ${category.title}`);
    } catch (err) {
      console.error(`❌ Category ${category.title}:`, err.message);
    }
  }

  // Create posts
  for (const post of posts) {
    try {
      await client.createOrReplace(post);
      console.log(`✅ Post: ${post.title}`);
    } catch (err) {
      console.error(`❌ Post ${post.title}:`, err.message);
    }
  }

  console.log("\n🎉 Seeding complete!");
  console.log("\nNext steps:");
  console.log("1. Visit https://wesafefuture.org/studio to manage your content");
  console.log("2. Add images to posts via the Studio");
  console.log("3. Create new posts directly from the Studio");
}

seed().catch(console.error);
