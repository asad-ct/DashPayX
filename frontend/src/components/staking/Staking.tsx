"use client";

import React from "react";
import { StakingHeader } from "./StakingHeader";
import { StakingCards } from "./StakingCards";
import { Loader } from "../common/Loader";
import { useContent } from "@/hooks/useContent";

interface StakingFeature {
    id: number;
    title: string;
    description: string;
    icon: string | { vector: string; image: string; vector2: string };
    iconType: "svg" | "composite" | "image";
}

export const Staking: React.FC = () => {
    const { data: contentData, loading, error } = useContent('staking');

    if (loading) {
        return <Loader />;
    }

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading staking content</div>;
    }

    const stakingFeatures: StakingFeature[] = contentData.content.features?.map((feature: any, index: number) => ({
        id: index + 1,
        title: feature.title,
        description: feature.description,
        icon: feature.icon || "/idea-mind-svgrepo-com-1.png",
        iconType: "image" as const,
    })) || [];

    const title = contentData.content.title;
    const subtitle = contentData.content.subtitle;

    return (
        <div className="relative w-full min-h-auto md:min-h-[749px] bg-[linear-gradient(180deg,rgba(6,49,68,0.9)_0%,rgba(35,116,143,0.9)_100%)] py-12 md:py-16 overflow-hidden">
            <div className="relative flex flex-col gap-8 md:gap-12 px-4">
                <StakingHeader title={title} subtitle={subtitle} />
                <StakingCards features={stakingFeatures} />
            </div>

            {/* Decorative polygon */}
            <img
                className="absolute top-16 left-4 md:left-8 w-40 sm:w-60 md:w-80 h-auto opacity-50"
                alt=""
                src="/polygon-9.svg"
                aria-hidden="true"
            />

            {/* Decorative group */}
            <img
                className="absolute bottom-8 right-4 md:right-8 w-16 sm:w-20 md:w-32 h-auto"
                alt=""
                src="/group.png"
                aria-hidden="true"
            />
        </div>
    );
};
