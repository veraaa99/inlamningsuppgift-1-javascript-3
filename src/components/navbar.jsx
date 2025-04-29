import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex justify-between">
        <div>
            <span>Bla</span>
        </div>
        <ul className="flex flex-row">
            <li><Link href="/" className="mr-20 cursor-pointer">Home</Link></li>
            <li><Link href="/events" className="mr-20 cursor-pointer">Events</Link></li>
        </ul>
    </nav>
  )
}