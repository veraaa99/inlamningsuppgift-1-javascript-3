import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export const Hero = ({ header, subHeader, image }) => {
    
    const opacityValue = image?.darken ? image.darken / 100 : 0 
    
    return (
        <header className="h-120 w-full flex flex-col justify-center items-center self-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light">
                { header }
            </h1>
            <h2 className="my-10 text-lg md:text-2xl lg:text-3xl font-extralight">
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