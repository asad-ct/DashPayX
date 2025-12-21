import React from "react";
import Image from "next/image";

interface SectionHeadingProps {
    title: string;
    highlightedWords?: string[];
    subtitle: string;
    showUnderline?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    showUnderline = true,
}) => {
    return (
        <div className="relative w-full max-w-[1440px] mx-auto py-8 md:py-12 px-4">
            <h2 className="w-full max-w-[767px] mx-auto [font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-center tracking-[0] leading-[40px] md:leading-[50px] mb-3">
                {title}
            </h2>

            <p className="w-full max-w-[967px] mx-auto [font-family:'Albert_Sans-Light',Helvetica] font-light text-[#6e6e6e] text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[24px] md:leading-[30px]">
                {subtitle}
            </p>
        </div>
    );
};
