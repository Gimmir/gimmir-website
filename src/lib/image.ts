import ImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './sanity.client'

const imageBuilder = ImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return imageBuilder.image(source)
}
