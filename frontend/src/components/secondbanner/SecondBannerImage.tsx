import React from "react";
import Image from "next/image";

export const SecondBannerImage = () => {
    return (
        <div className="w-full max-w-[629px] h-[280px] sm:h-[350px] md:h-[563px]">
            <Image
                src="/image-40.png"
                alt="Crypto trading platform illustration"
                width={629}
                height={563}
                className="object-cover w-full h-full"
            />
        </div>
    );
};
