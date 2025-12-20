import React from "react";
import Image from "next/image";

export const HeroImage = () => {
    return (
        <div className="w-full max-w-md lg:max-w-lg">
            <Image
                src="/image-36.png"
                alt="Crypto Mining Illustration"
                width={474}
                height={510}
                className="w-full h-auto object-cover"
                priority
            />
        </div>
    );
};
