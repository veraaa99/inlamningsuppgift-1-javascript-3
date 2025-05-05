import { getAllEvents } from "@/sanity/lib/api"
import Image from "next/image"
import Link from "next/link"

export const Events = async() => {

  const events = await getAllEvents()

  return (
    <div>
      <h2>Events:</h2>
      <div className="grid grid-cols-3 gap-5">
          {
            events && events.map(event => (
              <Link key={event._id} href={`/events/${event.slug}`}>
                  <div>
                      <Image 
                      src={event.image.url} 
                      alt={event.image.alt} 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                      />
                  </div>
                  <h3 className="text-center">{event.title}</h3>
              </Link>
            ))
          }
      </div>
    </div>
  )
}