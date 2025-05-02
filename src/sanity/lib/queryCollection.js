import { defineQuery } from "next-sanity";

export const GET_ALL_EVENTS_QUERY = defineQuery(`*[_type == 'event'] {
  _id,
  title,
  "slug": slug.current,
  "image": {
  "url": image.asset->url,
  "alt": image.alt
  }
}`)

export const GET_EVENT_QUERY = defineQuery(`*[_type == 'event' && slug.current ==$slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  date,
  "image": {
  "url": image.asset->url,
  "alt": image.alt
  },
  location
}`)

export const GET_ALL_PAGES_QUERY = defineQuery(`*[_type == 'page'] {
  _id,
  title,
  "slug": slug.current
}`)

export const GET_PAGE_QUERY = defineQuery(`*[_type == 'page' && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  sections
}`)
