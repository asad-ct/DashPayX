import React from "react";
import Image from "next/image";

export const FAQImage = () => {
    return (
        <div className="w-[350px] h-[450px] lg:w-[700px] lg:h-[850px] bg-white rounded-3xl border border-solid border-neutral-300 shadow-lg overflow-hidden">
            <Image
                src="/image-30.png"
                alt="FAQ illustration"
                width={784}
                height={884}
                className="w-full h-full object-contain"
            />
        </div>
    );
};
