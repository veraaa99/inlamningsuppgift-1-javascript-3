import { Events } from "./events"

export const Sections = ({ sections }) => {

  return (
    <div>
        {
            sections && sections.map(section => {
                switch(section._type) {
                    case "eventsSection":
                        return <Events key={section._key} />
                    default:
                        return null
                }
            })
        }
    </div>
  )
}