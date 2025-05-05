import { getEventBySlug } from "@/sanity/lib/api"
import { client } from "@/sanity/lib/client"
import { GET_EVENT_QUERY } from "@/sanity/lib/queryCollection"
import { format } from "date-fns"
import { sv } from "date-fns/locale"
import { PortableText } from "next-sanity"
import Image from "next/image"
import { notFound } from "next/navigation"

export const generateMetadata = async ({ params }) => {
    const { slug } = await params
    const event = await client.fetch(GET_EVENT_QUERY, { slug })

    return {
        title: event.title    
    }
}
    
    async function EventDetailsPage({ params }) {
      
      const { slug } = await params
      const event = await getEventBySlug(slug)
      console.log(event)
      console.log(event.description[0].children[0].text)

  if(!event) {
    return notFound()
  }

  const utcEventDate = event.date
  const displayDate = format(new Date(utcEventDate), "EEEE	dd MMM',  kl' HH:mm", { locale: sv })

    return (
      <div>
        <div>
          <h1 className="text-5xl">{event.title}</h1>
          <Image src={event.image.url} alt={event.image.alt} height={400} width={400}></Image>
        </div>
        <div>
          <h2>Om eventet:</h2>
          <PortableText value={event.description}/>
        </div>
        <div>
          <h2>Datum och tid: </h2>
          <p>{displayDate}</p>
          <h2>Plats: </h2>
          <p>{event.location}</p>
        </div>
      </div>
    )
  }
  export default EventDetailsPage