import React from "react";
import Image from "next/image";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[650px] bg-cover bg-center bg-[url(/frame-2011.png)] overflow-hidden z-20 flex items-center">
            {/* Background overlay */}
            <div className="absolute w-[61%] h-full">
                <Image
                    src="/heroBg2.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute w-full lg:w-[59%] h-full">
                <Image
                    src="/heroBg1.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute right-0 w-1/2 h-full -z-10 hidden md:block">
                <HeroImage />
            </div>

            {/* Content container */}
            <div className="relative w-full mx-auto my-auto px-4 lg:px-24 py-16 md:py-24 z-10 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-[60%]">
                    <HeroContent />
                </div>
            </div>
        </section>
    );
};
