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
                className="absolute top-[0px] left-[0px]"
            />

            {/* Decorative frame bottom right */}
            <Image
                src="/group.png"
                alt=""
                width={147}
                height={163}
                className="absolute bottom-[220px] right-[110px]"
            />
        </>
    );
};
