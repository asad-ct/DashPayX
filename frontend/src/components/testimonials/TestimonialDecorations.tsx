import React from "react";
import Image from "next/image";

export const TestimonialDecorations = () => {
    return (
        <>
            {/* Top right star */}
            <Image
                src="/star-2.svg"
                alt=""
                width={382}
                height={398}
                className="absolute top-[0px] right-[0px] aspect-[1] w-40 md:w-64 lg:w-auto z-10"
            />

            {/* Yellow circle top right */}
            <div className="absolute top-[63px] right-[231px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#fcc24f80] rounded-[25px] z-10" />

            {/* Blue circle top left */}
            <div className="absolute top-[133px] left-60 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-[#2169cf80] rounded-[25px] z-10" />

            {/* Orange circle small */}
            <div className="absolute top-[83px] left-[145px] w-[15px] md:w-[25px] h-[15px] md:h-[25px] bg-[#f8723c] rounded-[12.5px] aspect-[1] z-10" />

            {/* Bottom left polygon */}
            <Image
                src="/star-4.png"
                alt=""
                width={296}
                height={244}
                className="absolute bottom-0 left-10 w-32 md:w-48 lg:w-auto z-10"
            />
        </>
    );
};
