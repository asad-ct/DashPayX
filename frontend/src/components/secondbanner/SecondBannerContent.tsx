import React from "react";
import { BulletList } from "../common/BulletList";
import { CTAButton } from "../common/CTAButton";

interface SecondBannerContentProps {
    title: string;
    description: string;
    bulletPoints: string[];
    ctaText: string;
    onCtaClick?: () => void;
}

export const SecondBannerContent: React.FC<SecondBannerContentProps> = ({
    title,
    description,
    bulletPoints,
    ctaText,
    onCtaClick,
}) => {
    return (
        <div className="w-full max-w-[690px] h-auto md:h-[554px] relative px-4 md:px-0">
            <h3 className="w-full md:w-[667px] [font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-xl sm:text-2xl md:text-3xl lg:text-[40px] tracking-[0] leading-[32px] md:leading-[50px] mb-2 mt-3 md:mt-6">
                {title}
            </h3>

            <p className="w-full md:w-[690px] [font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-sm sm:text-base md:text-lg tracking-[0] leading-[24px] md:leading-[30px] mt-6 md:mt-12 mb-4 md:mb-8">
                {description}
            </p>

            <div className="mt-4 md:mt-6 mb-6 md:mb-8">
                <BulletList items={bulletPoints} />
            </div>

            <div className="flex justify-center md:justify-start mt-8 md:mt-12">
                <CTAButton text={ctaText} onClick={onCtaClick} />
            </div>
        </div>
    );
};
