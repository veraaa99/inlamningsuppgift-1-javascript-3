import { client } from "./client"
import { GET_ALL_EVENTS_QUERY, GET_EVENT_QUERY } from "./queryCollection"

export const getAllEvents = async() => {
    return client.fetch(GET_ALL_EVENTS_QUERY)
}

export const getEventBySlug = async(slug) => {
    return client.fetch(GET_EVENT_QUERY, { slug: slug })
}