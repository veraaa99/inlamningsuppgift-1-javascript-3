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

// Fixa en sectionsfil som visar de sections som användaren har skapat/lagt in i home page
// Lägg till pageTypefil i schematypes
// Se till att olika sektioner finns tillgängliga att skapa i pagetype-filen
// Fixa navbar (skapa och lägg till getpages och getPagebyslug-funktioner)

// Lägg in generateMetaData-funktioner

// Fixa sanityfetch, visual editing & live preview

// Fixa lite sections/herosections som kan visas på home page

// Fixa en komponent som heter event, och en som heter eventsection?