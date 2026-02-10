import { getHomePage, getPosts, getWorks } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import PostCard from '@/components/PostCard'
import SocialLinks from '@/components/SocialLinks'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await getHomePage()
  return {
    title: homePage?.metadata?.meta_title || 'Developer Portfolio',
    description: homePage?.metadata?.meta_description || 'Developer Portfolio built with Next.js and Cosmic',
  }
}

export default async function Home() {
  const [homePage, posts, works] = await Promise.all([
    getHomePage(),
    getPosts(),
    getWorks(),
  ])

  if (!homePage) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
        <p className="text-neutral-500">Add content to your Home Page in Cosmic to get started.</p>
      </div>
    )
  }

  const socials = homePage.metadata?.socials

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Hero */}
      <Hero
        avatar={homePage.metadata?.avatar}
        heading={homePage.metadata.heading}
        subHeading={homePage.metadata?.sub_heading}
      />

      {/* Social Links */}
      {socials && (
        <div className="mt-6">
          <SocialLinks socials={socials} />
        </div>
      )}

      {/* About */}
      {homePage.metadata?.about && (
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">About</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: homePage.metadata.about }}
          />
        </section>
      )}

      {/* Projects */}
      {works.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">Projects</h2>
          <div className="space-y-6">
            {works.map((work) => (
              <ProjectCard key={work.id} work={work} />
            ))}
          </div>
        </section>
      )}

      {/* Blog */}
      {posts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-6">Blog</h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      {homePage.metadata?.contact_heading && (
        <section className="mt-16 pb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4">
            {homePage.metadata.contact_heading}
          </h2>
          {homePage.metadata?.contact_text && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: homePage.metadata.contact_text }}
            />
          )}
          {socials?.metadata?.email && (
            <a
              href={`mailto:${socials.metadata.email}`}
              className="inline-block mt-4 text-sm font-medium text-neutral-900 border border-neutral-200 rounded-lg px-5 py-2.5 hover:bg-neutral-50 transition-colors"
            >
              Say hello →
            </a>
          )}
        </section>
      )}
    </div>
  )
}