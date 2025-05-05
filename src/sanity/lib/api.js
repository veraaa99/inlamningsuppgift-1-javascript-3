import { sanityFetch } from "./live"
import { GET_ALL_EVENTS_QUERY, GET_ALL_PAGES_QUERY, GET_EVENT_QUERY, GET_PAGE_QUERY } from "./queryCollection"

export const getAllEvents = async() => {
    const { data } = await sanityFetch({
        query: GET_ALL_EVENTS_QUERY
    })
    return data
}

export const getEventBySlug = async(slug) => {
    const { data } = await sanityFetch({
        query: GET_EVENT_QUERY,
        params: { slug }
    })
    return data
}

export const getAllPages = async() => {
    const { data } = await sanityFetch({
        query: GET_ALL_PAGES_QUERY
    })
    return data

}

export const getPageBySlug = async(slug) => {
    const { data } = await sanityFetch({
        query: GET_PAGE_QUERY,
        params: { slug }
    })
    return data
}