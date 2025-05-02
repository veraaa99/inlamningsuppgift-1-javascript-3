import { getAllPages } from "@/sanity/lib/api"
import { NavLink } from "./navlink"

export const Navbar = async () => {

  const pages = await getAllPages()

  return (
    <nav className="flex justify-between m-10">
        <div>
            <span>EventFinder</span>
        </div>
        <ul className="flex flex-row gap-4">
          {
            pages.map(page => (
              <li key={page._id}>
                  <NavLink href={`${page.slug === "/" ? '' : '/'}${page.slug}`}>{ page.title }</NavLink>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}