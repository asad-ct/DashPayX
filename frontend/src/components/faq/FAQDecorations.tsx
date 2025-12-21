import React from "react";
import Image from "next/image";

export const FAQDecorations = () => {
    return (
        <>
            {/* Decorative ellipse top right */}
            <Image
                src="/ellipse-53.png"
                alt=""
                width={400}
                height={400}
                className="absolute top-[0px] left-[0px] w-32 md:w-64 lg:w-auto -z-10"
            />

            {/* Decorative frame bottom right */}
            <Image
                src="/group.png"
                alt=""
                width={147}
                height={163}
                className="absolute bottom-[220px] right-[110px] w-16 md:w-24 lg:w-auto -z-10"
            />
        </>
    );
};
