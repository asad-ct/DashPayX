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
        <div className="w-[690px] h-[554px] relative">
            <h3 className="w-[667px] [font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-[40px] tracking-[0] leading-[50px] mb-2 mt-6">
                {title}
            </h3>

            <p className="w-[690px] [font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-lg tracking-[0] leading-[30px] mt-12 mb-8">
                {description}
            </p>

            <div className="mt-6 mb-8">
                <BulletList items={bulletPoints} />
            </div>

            <div className="flex justify-center mt-12">
                <CTAButton text={ctaText} onClick={onCtaClick} />
            </div>
        </div>
    );
};
