import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export const Hero = ({ header, subHeader, image }) => {
    return (
        <header className="flex flex-col justify-center items-center">
            <h1>
                { header }
            </h1>
            <h2>
                { subHeader }
            </h2>
            {
                image && (
                    <Image src={urlFor (image.asset).url()} alt={image.alt} width={400} height={400}/>
                )
            }
        </header>
    )
}