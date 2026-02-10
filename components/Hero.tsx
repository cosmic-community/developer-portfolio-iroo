import type { CosmicFile } from '@/types'

interface HeroProps {
  avatar?: CosmicFile
  heading: string
  subHeading?: string
}

export default function Hero({ avatar, heading, subHeading }: HeroProps) {
  return (
    <section className="flex items-center gap-5">
      {avatar && (
        <img
          src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
          alt="Avatar"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover"
        />
      )}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">{heading}</h1>
        {subHeading && (
          <p className="text-neutral-500 mt-1 text-sm">{subHeading}</p>
        )}
      </div>
    </section>
  )
}