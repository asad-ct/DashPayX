"use client";

import React from "react";
import { TokenomicsHeader } from "./TokenomicsHeader";
import { TokenomicsGrid } from "./TokenomicsGrid";
import { useContent } from "@/hooks/useContent";

interface TokenomicsCardData {
    id: number;
    title: string;
    description: string;
}

export const Tokenomics: React.FC = () => {
    const { data: contentData, error } = useContent('tokenomics');

    if (error || !contentData || !('content' in contentData)) {
        return null;
    }

    const tokenomicsData: TokenomicsCardData[] = contentData.content.cards?.map((card: any, index: number) => ({
        id: index + 1,
        title: card.title,
        description: card.description,
    })) || [];

    const title = contentData.content.title;
    const subtitle = contentData.content.subtitle;

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
                src="/star-4.png"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="flex flex-col items-center justify-center flex-1 gap-6 md:gap-8 py-8 md:py-12 lg:py-16 px-4 relative z-10">
                <TokenomicsHeader title={title} subtitle={subtitle} />
                <TokenomicsGrid cards={tokenomicsData} />
            </div>
        </div>
    );
};
