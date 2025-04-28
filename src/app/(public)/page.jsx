import { EventsSection } from "@/components/eventsSection"

function HomePage() {
  return (
    <div>
      <h1>Welcome to Event Finder!</h1>
      <h2>Browse and create all kinds of fun events for everyone!</h2>
      <div>
        <EventsSection />
      </div>
    </div>
  )
}
export default HomePage