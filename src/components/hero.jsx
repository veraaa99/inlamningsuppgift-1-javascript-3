import { urlFor } from "@/sanity/lib/image"
import { Montserrat } from "next/font/google"
import Image from "next/image"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"]
})

const montserratLight = Montserrat({
  subsets: ["latin"],
  weight: ["200"]
})

export const Hero = ({ header, subHeader, image }) => {
    
    const opacityValue = image?.darken ? image.darken / 100 : 0 
    
    return (
        <header className="h-120 w-full flex flex-col justify-center items-center self-center">
            <h1 className={`${montserrat.className} text-4xl mt-10 md:text-5xl lg:text-6xl`}>
                { header }
            </h1>
            <h2 className={`${montserratLight.className} my-10 text-xl md:text-2xl lg:text-3xl`}>
                { subHeader }
            </h2>
            <div className="relative w-full h-80">
                {
                    image && (
                        <>
                        <Image className="absolute w-full h-full object-cover" src={urlFor (image.asset).url()} alt={image.alt} width={700} height={700}/>
                        <div className="bg-black absolute z-10 inset-0" style={{ opacity: opacityValue }}/>
                        </>
                    )
                }
            </div>
        </header>
    )
}