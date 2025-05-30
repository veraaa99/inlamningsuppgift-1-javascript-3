import { Sections } from "@/components/sections"
import { getPageBySlug } from "@/sanity/lib/api"

async function HomePage() {

  const page = await getPageBySlug('/')

  return (
    <div>
      <Sections sections={page.sections}/>
    </div>
  )
}
export default HomePage