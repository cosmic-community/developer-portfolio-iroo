# Developer Portfolio

![Developer Portfolio](https://imgix.cosmicjs.com/c04f6a90-f00b-11ed-87b8-b7104fcd2121-blog-post-cover-cosmic.png?w=1200&h=300&fit=crop&auto=format,compress)

A minimal, clean developer portfolio built with Next.js 16 and Cosmic. Showcase your projects, blog posts, and contact information — all content managed through your Cosmic dashboard.

## Features

- 🏠 Dynamic hero section with avatar and bio
- 💼 Projects showcase with category filtering
- 📝 Blog with markdown rendering and category badges
- 📱 Social links (GitHub, LinkedIn, Twitter, Email, Resume)
- 📬 Contact section with call-to-action
- 🎨 Minimal monochrome design with Inter font
- 📱 Fully responsive design
- ⚡ Server-side rendering for fast loads and SEO
- 🔗 Dynamic routes for individual posts and projects

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=698b0ea2990447f74f5f8d2e&clone_repository=698b11db990447f74f5f8d73)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> No content model prompt provided - app built from existing content structure

### Code Generation Prompt

> "just create a react minimal portfolio"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS for content management
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [remark](https://github.com/remarkjs/remark) — Markdown to HTML processing

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A [Cosmic](https://www.cosmicjs.com) account with the Developer Portfolio bucket

### Installation

```bash
bun install
```

### Environment Variables

Set these in your hosting platform or `.env.local`:

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Cosmic SDK Examples

```typescript
import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Fetch home page data with connected socials object
const { object } = await cosmic.objects.findOne({
  type: 'home-page',
  slug: 'home-page',
}).props(['title', 'slug', 'metadata']).depth(1)

// Fetch all works with category data
const { objects } = await cosmic.objects.find({
  type: 'works',
}).props(['title', 'slug', 'metadata']).depth(1)
```

## Cosmic CMS Integration

This portfolio uses the following Cosmic object types:

| Object Type | Purpose |
|---|---|
| **Home Pages** | Hero section, about text, contact info |
| **Works** | Portfolio projects with cover images and markdown content |
| **Posts** | Blog posts with cover images and markdown content |
| **Socials** | Social media links and resume |
| **Work Categories** | Project categories (Personal, Freelance) |
| **Post Categories** | Blog categories (Next.js, Web Dev, Cosmic) |

## Deployment Options

### Vercel (Recommended)

1. Push to GitHub
2. Import into [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Netlify

1. Push to GitHub
2. Import into [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->