// app/posts/[slug]/page.tsx
import { getPostBySlug, getPosts } from '@/lib/cosmic'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: post.title,
    description: post.metadata.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.metadata.content || '')

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
      >
        ← Back
      </Link>

      <article className="mt-8">
        {post.metadata.cover_image && (
          <img
            src={`${post.metadata.cover_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={post.title}
            width={600}
            height={300}
            className="w-full rounded-lg mb-8"
          />
        )}

        <div className="flex items-center gap-3 mb-4">
          {post.metadata.category && (
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded">
              {post.metadata.category.title}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-neutral-400 text-sm mb-8">{post.metadata.excerpt}</p>

        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  )
}