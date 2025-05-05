import { Events } from "./events"
import { Hero } from "./hero"

export const Sections = ({ sections }) => {

  return (
    <div>
        {
            sections && sections.map(section => {
                switch(section._type) {
                    case "eventsSection":
                        return <Events key={section._key} />
                    case "heroSection":
                        return <Hero key={section._key} header={section.header} subHeader={section.subHeader} image={section.image}/>
                    default:
                        return null
                }
            })
        }
    </div>
  )
}