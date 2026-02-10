import Link from 'next/link'
import type { Work } from '@/types'

interface ProjectCardProps {
  work: Work
}

export default function ProjectCard({ work }: ProjectCardProps) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex gap-4 items-start p-4 -mx-4 rounded-xl hover:bg-neutral-50 transition-colors"
    >
      {work.metadata.cover_image && (
        <img
          src={`${work.metadata.cover_image.imgix_url}?w=200&h=140&fit=crop&auto=format,compress`}
          alt={work.title}
          width={100}
          height={70}
          className="w-24 h-16 rounded-lg object-cover flex-shrink-0"
        />
      )}
      <div className="min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">
            {work.title}
          </h3>
          {work.metadata.category && (
            <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded flex-shrink-0">
              {work.metadata.category.title}
            </span>
          )}
        </div>
        <p className="text-xs text-neutral-400 line-clamp-2">{work.metadata.excerpt}</p>
      </div>
    </Link>
  )
}