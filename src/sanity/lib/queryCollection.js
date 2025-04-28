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


export const GET_EVENT_QUERY = defineQuery(`*[_type == 'event'] {
  _id,
  title,
  "slug": slug.current,
  "image": {
  "url": image.asset->url,
  "alt": image.alt
  },
  date,
  location
}`)