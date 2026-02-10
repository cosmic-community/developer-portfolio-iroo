import Link from 'next/link'

export default function Header() {
  return (
    <header className="max-w-2xl mx-auto w-full px-6 pt-12 pb-4">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 hover:text-neutral-500 transition-colors"
        >
          Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/#projects"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/#blog"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}