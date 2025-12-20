import React from "react";
import Image from "next/image";

interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
    imageAspect?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
    image,
    title,
    description,
    imageAspect = "1.16",
}) => {
    return (
        <div className="w-[700px] h-[255px] bg-[#fbfbfb] rounded-xl overflow-hidden border border-solid border-[#cfcfcf] hover:shadow-lg transition-shadow">
            <div className="relative h-full p-5">
                <div className="absolute top-11 left-5 w-[160px] h-[140px]">
                    <Image
                        src={image}
                        alt={title}
                        width={160}
                        height={140}
                        className="object-cover"
                        style={{ aspectRatio: imageAspect }}
                    />
                </div>

                <div className="ml-[195px]">
                    <h4 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-[28px] tracking-[0] leading-[50px] mb-2">
                        {title}
                    </h4>

                    <p className="w-[479px] [font-family:'Albert_Sans-Light',Helvetica] font-light text-[#6e6e6e] text-lg tracking-[0] leading-[30px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
