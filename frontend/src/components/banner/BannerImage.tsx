import React from "react";
import Image from "next/image";

export const BannerImage = () => {
    return (
        <div className="relative w-[658px] h-[478px]">
            <div className="absolute top-[9px] left-9 w-[592px] h-[459px]">
                <Image
                    src="/banner1-image1.svg"
                    alt=""
                    width={592}
                    height={459}
                    className="object-contain"
                />
            </div>
            <div className="absolute top-[19px] left-11 w-[592px] h-[459px]">
                <Image
                    src="/banner1-image2.svg"
                    alt="Platform illustration"
                    width={592}
                    height={459}
                    className="object-cover"
                />
            </div>
        </div>
    );
};
