import { createBucketClient } from '@cosmicjs/sdk'
import type { HomePage, Post, Work, Socials, SiteSettings } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getHomePage(): Promise<HomePage | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'home-page',
      slug: 'home-page',
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    return response.object as HomePage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch home page')
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    return response.objects as Post[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch posts')
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'posts',
      slug,
    }).props(['id', 'title', 'slug', 'metadata', 'created_at']).depth(1)
    return response.object as Post
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch post')
  }
}

export async function getWorks(): Promise<Work[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'works' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1)
    return response.objects as Work[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch works')
  }
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'works',
      slug,
    }).props(['id', 'title', 'slug', 'metadata', 'created_at']).depth(1)
    return response.object as Work
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch work')
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'site-settings',
      slug: 'site-settings',
    }).props(['id', 'title', 'slug', 'metadata']).depth(1)
    return response.object as SiteSettings
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch site settings')
  }
}