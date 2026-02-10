export default function Footer() {
  return (
    <footer className="max-w-2xl mx-auto w-full px-6 py-8 mt-8">
      <div className="border-t border-neutral-100 pt-6">
        <p className="text-xs text-neutral-300 text-center">
          © {new Date().getFullYear()} · Built with Next.js &amp; Cosmic
        </p>
      </div>
    </footer>
  )
}