import React from "react";
import Image from "next/image";

export const ContactDecorations = () => {
    return (
        <>
            {/* Top curved white background */}
            <div className="absolute top-[185px] left-1/2 -translate-x-1/2 w-[150%] max-w-[2400px] h-[520px] bg-white rounded-[50%]" />

            {/* White background top section */}
            <div className="absolute top-0 left-0 w-full h-[431px] bg-white" />

            {/* Decorative line */}
            <Image
                src="/decorative-line.svg"
                alt=""
                width={307}
                height={0}
                className="absolute top-[249px] left-[calc(40.94%)]"
            />

            {/* Frame decoration bottom left */}
            <Image
                src="/group.png"
                alt=""
                width={147}
                height={163}
                className="absolute top-[calc(52.94%)] left-[26px]"
            />

            {/* Circle decoration bottom right */}
            <Image
                src="/linedCircle.png"
                alt=""
                width={179}
                height={179}
                className="absolute top-[calc(65.94%)] right-[calc(17.94%)]"
            />

            {/* Ellipse top right */}
            <Image
                src="/Ellipse-53c.png"
                alt=""
                width={447}
                height={447}
                className="absolute top-0 right-0"
            />
        </>
    );
};
