import React from "react";

interface BannerContentProps {
    title: string;
    subtitle: string;
    description: string;
}

export const BannerContent: React.FC<BannerContentProps> = ({
    title,
    subtitle,
    description,
}) => {
    return (
        <div className="w-[690px] h-[423px] relative bg-white overflow-hidden">
            <h3 className="w-[667px] [font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-[40px] tracking-[0] leading-[45px] mb-6">
                {title}
            </h3>

            <h4 className="w-[667px] [font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#29838a] text-3xl tracking-[0] leading-[50px] mb-4">
                {subtitle}
            </h4>

            <p className="w-[690px] [font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-lg tracking-[0] leading-[30px]">
                {description}
            </p>
        </div>
    );
};
