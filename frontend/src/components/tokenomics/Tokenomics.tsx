import React from "react";
import { TokenomicsHeader } from "./TokenomicsHeader";
import { TokenomicsGrid } from "./TokenomicsGrid";

interface TokenomicsCardData {
    id: number;
    title: string;
    description: string;
}

export const Tokenomics: React.FC = () => {
    const tokenomicsData: TokenomicsCardData[] = [
        {
            id: 1,
            title: "Total Supply",
            description: "1,000,000,000 DPX (fixed supply)",
        },
        {
            id: 2,
            title: "Buy / Sell Tax",
            description: "0% — no extra token tax on transfers.",
        },
        {
            id: 3,
            title: "Presale",
            description: "No presale. No private allocations. Distribution aligned with long-term ecosystem usage and liquidity.",
        },
        {
            id: 4,
            title: "Primary Use Cases",
            description:
                "Everyday payments (starting with Pakistan & GCC), staking rewards, and future integrations with partner platforms and merchants.",
        },
    ];

    return (
        <div className="relative w-full min-h-auto md:min-h-[716px] bg-[#f6f6f6] flex flex-col overflow-hidden">
            {/* Decorative Star */}
            <img
                className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 lg:w-[364px] h-auto opacity-70"
                alt="Star"
                src="/star-2.svg"
                aria-hidden="true"
            />

            {/* Decorative Circles */}
            <div className="hidden lg:block absolute top-[73px] right-[471px] w-[50px] h-[50px] bg-[#fcc24f80] rounded-full" />
            <div className="hidden lg:block absolute top-[143px] left-60 w-[50px] h-[50px] bg-[#2169cf80] rounded-full" />
            <div className="hidden lg:block absolute top-[93px] left-[145px] w-[25px] h-[25px] bg-[#f8723c] rounded-full" />

            {/* Decorative Polygon */}
            <img
                className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-[369px] h-auto opacity-70"
                alt="Polygon"
                src="/polygon-grey-9.svg"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-center flex-1 gap-6 md:gap-8 py-8 md:py-12 lg:py-16 px-4 relative z-10">
                <TokenomicsHeader />
                <TokenomicsGrid cards={tokenomicsData} />
            </div>
        </div>
    );
};
