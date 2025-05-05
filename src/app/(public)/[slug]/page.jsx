import { Sections } from "@/components/sections"
import { getPageBySlug } from "@/sanity/lib/api"
import { client } from "@/sanity/lib/client"
import { GET_PAGE_QUERY } from "@/sanity/lib/queryCollection"

export const generateMetadata = async ({ params }) => {
    const { slug } = await params
    const page = await client.fetch(GET_PAGE_QUERY, { slug })
    
    return {
        title: page.title,
        description: page.description
    }

}

async function SlugPage({ params }) {

    const { slug } = await params
    const page = await getPageBySlug(slug)

  return (
    <div>
        <Sections sections={page.sections} />
    </div>
  )
}
export default SlugPage