// app/works/[slug]/page.tsx
import { getWorkBySlug, getWorks } from '@/lib/cosmic'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const works = await getWorks()
  return works.map((work) => ({
    slug: work.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const work = await getWorkBySlug(slug)
  if (!work) return { title: 'Project Not Found' }
  return {
    title: work.title,
    description: work.metadata.excerpt,
  }
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const work = await getWorkBySlug(slug)

  if (!work) {
    notFound()
  }

  const contentHtml = await markdownToHtml(work.metadata.content || '')

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors"
      >
        ← Back
      </Link>

      <article className="mt-8">
        {work.metadata.cover_image && (
          <img
            src={`${work.metadata.cover_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
            alt={work.title}
            width={600}
            height={300}
            className="w-full rounded-lg mb-8"
          />
        )}

        <div className="flex items-center gap-3 mb-4">
          {work.metadata.category && (
            <span className="text-xs font-medium uppercase tracking-wider text-neutral-400 bg-neutral-100 px-2.5 py-1 rounded">
              {work.metadata.category.title}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-bold mb-2">{work.title}</h1>
        <p className="text-neutral-400 text-sm mb-6">{work.metadata.excerpt}</p>

        <div className="flex gap-4 mb-8">
          {work.metadata.repo_url && (
            <a
              href={work.metadata.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-900 border border-neutral-200 rounded-lg px-4 py-2 hover:bg-neutral-50 transition-colors"
            >
              Repository
            </a>
          )}
          {work.metadata.live_url && (
            <a
              href={work.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-neutral-900 rounded-lg px-4 py-2 hover:bg-neutral-700 transition-colors"
            >
              Live Site
            </a>
          )}
        </div>

        <div className="prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  )
}