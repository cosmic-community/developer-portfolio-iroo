import type { Socials } from '@/types'

interface SocialLinksProps {
  socials: Socials
}

export default function SocialLinks({ socials }: SocialLinksProps) {
  const meta = socials.metadata

  if (!meta) return null

  const links: { label: string; href: string }[] = []

  if (meta.github) {
    links.push({ label: 'GitHub', href: `https://github.com/${meta.github}` })
  }
  if (meta.linkedin) {
    links.push({ label: 'LinkedIn', href: `https://linkedin.com/in/${meta.linkedin}` })
  }
  if (meta.twitter) {
    const handle = meta.twitter.startsWith('@') ? meta.twitter.slice(1) : meta.twitter
    links.push({ label: 'Twitter', href: `https://twitter.com/${handle}` })
  }
  if (meta.email) {
    links.push({ label: 'Email', href: `mailto:${meta.email}` })
  }
  if (meta.resume) {
    links.push({ label: 'Resume', href: meta.resume.url })
  }

  if (links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-neutral-500 border border-neutral-200 rounded-full px-3 py-1.5 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}