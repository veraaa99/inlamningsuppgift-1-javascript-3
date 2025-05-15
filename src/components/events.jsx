import { getAllEvents } from "@/sanity/lib/api"
import Image from "next/image"
import Link from "next/link"

export const Events = async() => {

  const events = await getAllEvents()

  return (
    <div className="w-full px-15">
      <h1 className="text-5xl lg:text-7xl text-center font-light">Events:</h1>
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
                  <h3 className="text-center text-xl font-extralight p-4">{event.title}</h3>
              </Link>
            ))
          }
      </div>
    </div>
  )
}