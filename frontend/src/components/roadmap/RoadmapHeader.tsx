import React from "react";

interface RoadmapHeaderProps {
    title?: string;
    subtitle?: string;
}

export const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({
    title = 'Roadmap (High-Level) by DashPayX',
    subtitle = 'DashPayX is being built step by step with a focus on utility, compliance and long-term credibility. The roadmap below is a high-level view and may be refined as the project matures.'
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full px-4">
            <h1 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-center tracking-[0] leading-[32px] md:leading-[50px]">
                <span className="text-[#272323]">{title.split(' by ')[0]} by </span>
                <span className="text-[#29838a]">{title.split(' by ')[1] || 'DashPayX'}</span>
            </h1>

            <p className="max-w-[811px] [font-family:'Albert_Sans-Light',Helvetica] font-light text-[#6e6e6e] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-[22px] md:leading-[26px]">
                {subtitle}
            </p>
        </div>
    );
};
