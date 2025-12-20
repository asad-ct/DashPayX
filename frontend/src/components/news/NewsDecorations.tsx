import React from "react";
import Image from "next/image";

export const NewsDecorations = () => {
    return (
        <>
            {/* Top left star */}
            <Image
                src="/star-4.png"
                alt=""
                width={300}
                height={284}
                className="absolute top-[83px] left-0"
            />

            {/* Bottom right ellipse */}
            <Image
                src="/ellipse-53b.png"
                alt=""
                width={447}
                height={447}
                className="absolute bottom-0 right-0"
            />
        </>
    );
};
