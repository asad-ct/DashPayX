import React from "react";

interface StakingHeaderProps {
    title?: string;
    subtitle?: string;
}

export const StakingHeader: React.FC<StakingHeaderProps> = ({
    title = 'Staking: Rewarding Long-Term DPX Holders',
    subtitle = 'Staking is a core part of the DashPayX vision. The idea is simple: long-term holders will be able to lock their DPX tokens in a secure smart contract and earn additional DPX as rewards over time, aligned with the growth of the ecosystem.'
}) => {
    return (
        <header className="relative w-full max-w-7xl mx-auto flex flex-col items-center gap-4 md:gap-8 px-4 lg:px-8 mb-8 md:mb-12">
            <h1 className="[font-family:'Spline_Sans-SemiBold',Helvetica] font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center tracking-[0] leading-tight">
                {title}
            </h1>

            <p className="max-w-4xl [font-family:'Inter-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-relaxed">
                {subtitle}
            </p>
        </header>
    );
};
