// Example GROQ query interface
export const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  excerpt,
  body,
  _createdAt,
  mainImage,
  author-> {
    _id,
    name,
    image
  }
}`

export const SINGLE_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  body,
  _createdAt,
  mainImage,
  author-> {
    _id,
    name,
    image
  }
}`
