# Gimmir Website

A modern website built with **Next.js 15 (App Router)** and **Sanity v3 (Embedded Studio)**.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **CMS**: Sanity v3 (Embedded Studio)
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## 📁 Project Structure

```
gimmir-website/
├── app/
│   ├── studio/
│   │   └── [[...tool]]/
│   │       └── page.tsx          # Embedded Sanity Studio
│   ├── globals.css                # Global styles with Tailwind
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Homepage
├── sanity/
│   ├── env.ts                     # Environment variable validation
│   ├── lib/
│   │   ├── client.ts              # Sanity client for data fetching
│   │   └── image.ts               # Image URL builder helper
│   └── schemaTypes/
│       ├── index.ts               # Schema aggregation
│       └── post.ts                # Post content schema
├── sanity.config.ts               # Main Sanity configuration
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Project dependencies
└── .env.local.example             # Environment variables template
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Create Sanity Project

If you don't have a Sanity project yet:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project
3. Note your **Project ID** and **Dataset** name

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-11-24"
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 5. Access Sanity Studio

Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to access the embedded Sanity Studio.

## 📝 Key Files Explained

### `sanity.config.ts`
Main configuration file for Sanity CMS, defining the studio setup, plugins, and schema.

### `sanity/env.ts`
Validates required environment variables at runtime, ensuring proper configuration.

### `sanity/lib/client.ts`
Exports a configured Sanity client for fetching data in your Next.js components.

### `sanity/lib/image.ts`
Helper function (`urlForImage`) to generate optimized image URLs from Sanity image objects.

### `sanity/schemaTypes/post.ts`
Example content schema for blog posts with title, slug, image, and body fields.

### `app/studio/[[...tool]]/page.tsx`
Dynamic route that embeds the Sanity Studio directly into your Next.js app.

## 🎨 Example: Fetching Data

Create a new page to fetch and display posts:

```typescript
// app/posts/page.tsx
import { client } from '@/sanity/lib/client';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
}

export default async function PostsPage() {
  const posts = await client.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug
    }`
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <a href={`/posts/${post.slug.current}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is private and proprietary to Gimmir LLC.
