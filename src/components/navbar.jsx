import { getAllPages } from "@/sanity/lib/api"
import { NavLink } from "./navlink"

import { Anton, Montserrat } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"]
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"]
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
              <li key={page._id} className={`${montserrat.className} text-xl`}>
                  <NavLink href={`${page.slug === "/" ? '' : '/'}${page.slug}`}>{ page.title }</NavLink>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}