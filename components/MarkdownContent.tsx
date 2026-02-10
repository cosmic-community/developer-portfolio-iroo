interface MarkdownContentProps {
  html: string
  className?: string
}

export default function MarkdownContent({ html, className }: MarkdownContentProps) {
  return (
    <div
      className={`prose ${className || ''}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}