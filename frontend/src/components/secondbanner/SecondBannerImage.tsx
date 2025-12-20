import React from "react";
import Image from "next/image";

export const SecondBannerImage = () => {
    return (
        <div className="w-[629px] h-[563px]">
            <Image
                src="/image-40.png"
                alt="Crypto trading platform illustration"
                width={629}
                height={563}
                className="object-cover aspect-[1.12]"
            />
        </div>
    );
};
