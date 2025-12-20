import React from "react";

export const RoadmapHeader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
            <h1 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[42px] text-center tracking-[0] leading-[50px]">
                <span className="text-[#272323]">Roadmap (High-Level) by </span>
                <span className="text-[#29838a]">DashPayX</span>
            </h1>

            <p className="max-w-[811px] [font-family:'Albert_Sans-Light',Helvetica] font-light text-[#6e6e6e] text-lg text-center tracking-[0] leading-[26px]">
                DashPayX is being built step by step with a focus on utility,
                compliance and long-term credibility. The roadmap below is a
                high-level view and may be refined as the project matures.
            </p>
        </div>
    );
};
