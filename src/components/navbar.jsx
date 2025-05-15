import { getAllPages } from "@/sanity/lib/api"
import { NavLink } from "./navlink"

import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})

export const Navbar = async () => {

  const pages = await getAllPages()

  return (
    <nav className="flex justify-between m-10">
        <div>
            <NavLink href="/"><span className={`${anton.className} text-3xl`}>EventFinder</span></NavLink>
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