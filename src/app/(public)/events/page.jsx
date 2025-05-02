import { Sections } from "@/components/sections"
import { getPageBySlug } from "@/sanity/lib/api"

async function EventPage() {

  const page = await getPageBySlug('events')

    return (
      <div>
          <Sections sections={page.sections} />
      </div>
    )
  }
  export default EventPage