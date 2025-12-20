import React from "react";
import { StakingCard } from "./StakingCard";

interface StakingFeature {
    id: number;
    title: string;
    description: string;
    icon: string | { vector: string; image: string; vector2: string };
    iconType: "svg" | "composite" | "image";
}

interface StakingCardsProps {
    features: StakingFeature[];
}

export const StakingCards: React.FC<StakingCardsProps> = ({ features }) => {
    return (
        <section className="relative w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                {features.map((feature, index) => (
                    <StakingCard key={feature.id} feature={feature} index={index} />
                ))}
            </div>
        </section>
    );
};
