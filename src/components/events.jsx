import { getAllEvents } from "@/sanity/lib/api"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"]
})

const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: ["200"]
})

export const Events = async() => {

  const events = await getAllEvents()

  return (
    <div className="w-full px-15 mb-10">
      <h1 className={`${montserrat.className} text-5xl mt-10 lg:text-6xl text-center font-light`}>Events:</h1>
      {
        events.length == 0 &&
        <h2 className={`${montserratLight.className} text-4xl mt-15 lg:text-5xl text-center font-light`}>No events avaliable</h2>
      }
      <div className="grid grid-cols-1 gap-15 md:grid-cols-2 md:gap-18 xl:grid-cols-3 xl:gap-10 2xl:gap-10 mt-15">
          {
            events && events.map(event => (
              <Link className="w-85 h-auto overflow-hidden border-3 rounded-xl m-auto 2xl:w-100" key={event._id} href={`/events/${event.slug}`}>
                  <div className="m-auto w-auto h-auto aspect-square flex align-center">
                      <Image 
                      src={event.image.url} 
                      alt={event.image.alt} 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                      />
                  </div>
                  <h3 className={`${montserratLight.className} text-center text-xl p-4`}>{event.title}</h3>
              </Link>
            ))
          }
      </div>
    </div>
  )
}