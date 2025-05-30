import { getEventBySlug } from "@/sanity/lib/api"
import { client } from "@/sanity/lib/client"
import { GET_EVENT_QUERY } from "@/sanity/lib/queryCollection"
import { format } from "date-fns"
import { sv } from "date-fns/locale"
import { PortableText } from "next-sanity"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import { notFound } from "next/navigation"

export const generateMetadata = async ({ params }) => {
    const { slug } = await params
    const event = await client.fetch(GET_EVENT_QUERY, { slug })

    return {
        title: event.title    
    }
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"]
})
    
async function EventDetailsPage({ params }) {
  
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if(!event) {
  return notFound()
  }

  const utcEventDate = event.date
  const displayDate = format(new Date(utcEventDate), "EEEE	dd MMM',  kl' HH:mm", { locale: sv })

    return (
      <div className="flex justify-center items-center w-full md:my-10 bg-slate-950/50 pb-15 pt-8">
        <div className="flex flex-col align-center justify-center self-center w-full md:flex-row">

          <div className="flex flex-col items-center text-center self-center w-85 h-auto mx-10 overflow-hidden md:w-full lg:w-100">
            <h1 className={`${montserrat.className} text-xl py-5 text-wrap lg:text-2xl xl:text-3xl`}>{event.title}</h1>
            <div className="m-auto w-full h-full aspect-square flex align-center border-3 rounded-xl">
              <Image className="w-full h-full object-cover rounded-lg" src={event.image.url} alt={event.image.alt} height={400} width={400}></Image>
            </div>
          </div>

          <div className="flex flex-col justify-center self-center gap-10 p-5 mt-5 md:m-0 ">
            <div>
              <h2 className={`${montserrat.className} text-xl mb-4 md:text-2xl`}>Om eventet:</h2>
              <PortableText className="" value={event.description}/>
            </div>
            <div>
              <h2 className={`${montserrat.className} text-xl md:text-2xl`}>Datum och tid: </h2>
              <p className="my-4 md:text-lg" >{displayDate}</p>
              <h2 className={`${montserrat.className} text-xl mt-5 md:text-2xl`}>Plats: </h2>
              <p className="my-4 md:text-lg" >{event.location}</p>
            </div>
          </div>

        </div>
      </div>
      
    )
  }
  export default EventDetailsPage