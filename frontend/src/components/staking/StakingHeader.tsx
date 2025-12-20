import React from "react";

export const StakingHeader: React.FC = () => {
    return (
        <header className="relative w-full max-w-7xl mx-auto flex flex-col items-center gap-8 px-4 lg:px-8 mb-12">
            <h1 className="[font-family:'Spline_Sans-SemiBold',Helvetica] font-semibold text-white text-3xl md:text-4xl text-center tracking-[0] leading-tight">
                Staking: Rewarding Long-Term DPX Holders
            </h1>

            <p className="max-w-4xl [font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg md:text-xl text-center tracking-[0] leading-relaxed">
                Staking is a core part of the DashPayX vision. The idea is simple:
                long-term holders will be able to lock their DPX tokens in a secure
                smart contract and earn additional DPX as rewards over time, aligned
                with the growth of the ecosystem.
            </p>
        </header>
    );
};
