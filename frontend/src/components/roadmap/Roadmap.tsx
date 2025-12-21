import React from "react";
import { RoadmapHeader } from "./RoadmapHeader";
import { RoadmapGrid } from "./RoadmapGrid";
import { RoadmapFooter } from "./RoadmapFooter";

interface PhaseData {
    phaseNumber: string;
    title: string;
    description: string[];
}

export const Roadmap: React.FC = () => {
    const phases: PhaseData[] = [
        {
            phaseNumber: "1",
            title: "Foundation",
            description: [
                "Token design and initial smart contracts (DPX & staking).",
                "Brand identity, official website & social channels.",
                "Core documentation and positioning for payments & staking.",
            ],
        },
        {
            phaseNumber: "2",
            title: "Community & Liquidity",
            description: [
                "Launch of public community channels (Telegram, X, Discord).",
                "Initial liquidity provision on DEX (e.g. PancakeSwap).",
                "Transparent communication on token distribution and treasury policy.",
            ],
        },
        {
            phaseNumber: "3",
            title: "Staking & Ecosystem",
            description: [
                "Deployment of audited staking contracts for DPX.",
                "Publishing of detailed staking documentation & tutorials.",
                "Early ecosystem integrations and utility pilots for DPX payments.",
            ],
        },
        {
            phaseNumber: "4",
            title: "Payments & Expansion",
            description: [
                "Partnerships with payment facilitators, fintechs and merchants in Pakistan & GCC.",
                "Exploration of remittance and bill payment use cases with compliant partners.",
                "Broader regional expansion based on adoption, regulation and demand.",
            ],
        },
    ];

    return (
        <div className="relative w-full bg-white flex flex-col gap-6 md:gap-8 py-8 md:py-12 lg:py-16 px-4 overflow-hidden">
            <RoadmapHeader />
            <RoadmapGrid phases={phases} />
            <RoadmapFooter />
        </div>
    );
};
