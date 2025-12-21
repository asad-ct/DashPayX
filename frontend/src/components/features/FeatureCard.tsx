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
        <div className="w-full md:w-[700px] h-auto md:h-[255px] bg-[#fbfbfb] rounded-xl overflow-hidden border border-solid border-[#cfcfcf] hover:shadow-lg transition-shadow">
            <div className="relative h-full p-3 md:p-5 flex flex-col md:flex-row">
                <div className="md:absolute md:top-11 md:left-5 w-full md:w-[160px] h-[150px] md:h-[140px] mb-3 md:mb-0">
                    <Image
                        src={image}
                        alt={title}
                        width={160}
                        height={140}
                        className="object-cover w-full h-full"
                        style={{ aspectRatio: imageAspect }}
                    />
                </div>

                <div className="md:ml-[195px] w-full">
                    <h4 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-lg md:text-2xl lg:text-[28px] tracking-[0] leading-[32px] md:leading-[50px] mb-2">
                        {title}
                    </h4>

                    <p className="w-full md:w-[479px] [font-family:'Albert_Sans-Light',Helvetica] font-light text-[#6e6e6e] text-sm md:text-base lg:text-lg tracking-[0] leading-[24px] md:leading-[30px]">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
