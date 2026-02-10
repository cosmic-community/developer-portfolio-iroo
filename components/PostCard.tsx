import Link from 'next/link'
import type { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex items-center justify-between gap-4 py-3 px-4 -mx-4 rounded-xl hover:bg-neutral-50 transition-colors"
    >
      <div className="min-w-0">
        <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors truncate">
          {post.title}
        </h3>
        <p className="text-xs text-neutral-400 mt-0.5 truncate">{post.metadata.excerpt}</p>
      </div>
      {post.metadata.category && (
        <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded flex-shrink-0">
          {post.metadata.category.title}
        </span>
      )}
    </Link>
  )
}