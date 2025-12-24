import React from "react";
import Image from "next/image";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[650px] bg-cover bg-center bg-[url(/frame-2011.png)] overflow-hidden">
            {/* Background overlay */}
            <div className="absolute w-full h-full">
                <Image
                    src="/rectangle-5391.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content container */}
            <div className="relative w-full mx-auto px-4 lg:px-32 py-16 md:py-24 z-10 flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-[70%] order-2 md:order-1">
                    <HeroContent />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2 md:max-w-none">
                    <HeroImage />
                </div>
            </div>
        </section>
    );
};
