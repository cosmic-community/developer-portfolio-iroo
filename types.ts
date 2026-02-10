export interface CosmicFile {
  url: string
  imgix_url: string
}

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, unknown> | null // Changed: Allow null since Cosmic returns null for objects without metafields
  type: string
  created_at?: string
  modified_at?: string
  status?: string
}

export interface Socials extends CosmicObject {
  type: 'socials'
  metadata: {
    resume?: CosmicFile
    email?: string
    github?: string
    linkedin?: string
    twitter?: string
  }
}

export interface HomePage extends CosmicObject {
  type: 'home-page'
  metadata: {
    meta_title?: string
    meta_description?: string
    meta_image?: CosmicFile
    avatar?: CosmicFile
    heading: string
    sub_heading?: string
    about?: string
    socials?: Socials
    contact_heading?: string
    contact_text?: string
  }
}

export interface PostCategory extends CosmicObject {
  type: 'post-categories'
  metadata: null
}

export interface WorkCategory extends CosmicObject {
  type: 'work-categories'
  metadata: null
}

export interface Post extends CosmicObject {
  type: 'posts'
  metadata: {
    cover_image: CosmicFile
    content: string
    category?: PostCategory
    excerpt: string
  }
}

export interface Work extends CosmicObject {
  type: 'works'
  metadata: {
    cover_image: CosmicFile
    content: string
    category: WorkCategory
    repo_url?: string
    live_url?: string
    excerpt: string
  }
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings'
  metadata: {
    enable_robots?: boolean
    default_meta_image?: CosmicFile
    site_url?: string
  }
}