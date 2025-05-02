import { Sections } from "@/components/sections"
import { getPageBySlug } from "@/sanity/lib/api"

async function SlugPage({ params }) {
    const slug = await params
    const page = await getPageBySlug(slug)

    return (
        <div>
            <Sections sections={page.sections} />
        </div>
    )
}

export default SlugPage