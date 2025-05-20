import { DisableDraftMode } from "@/components/DisableDraftMode"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { SanityLive } from "@/sanity/lib/live"
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"

async function PublicLayout( { children } ) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <main>
        { children }
      </main>
      <SanityLive />
      { (await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        ) 
      }
      <Footer />
    </div>
  )
}
export default PublicLayout