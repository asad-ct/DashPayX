import React from "react";
import { StakingHeader } from "./StakingHeader";
import { StakingCards } from "./StakingCards";

interface StakingFeature {
    id: number;
    title: string;
    description: string;
    icon: string | { vector: string; image: string; vector2: string };
    iconType: "svg" | "composite" | "image";
}

export const Staking: React.FC = () => {
    const stakingFeatures: StakingFeature[] = [
        {
            id: 1,
            title: "Simple Concept",
            description:
                "You commit (stake) a certain amount of DPX for a period of time. While your tokens are staked, they cannot be used for transfers, but they work on your behalf to earn staking rewards.",
            icon: "/idea-mind-svgrepo-com-1.png",
            iconType: "image",
        },
        {
            id: 2,
            title: "Designed for Sustainability",
            description:
                "Staking parameters (lock periods, reward rates, caps) are planned to be designed carefully so that rewards are meaningful for holders but still sustainable for the long-term health of the DashPayX economy.",
            icon: "/go-green-icon-1.png",
            iconType: "image",
        },
        {
            id: 3,
            title: "Transparent & Optional",
            description:
                "Staking will always be optional. Users who prefer pure liquidity can simply hold or use DPX for payments, while those with a longer horizon can choose to stake and earn extra DPX, with clear terms and on-chain transparency.",
            icon: "/image-46.png",
            iconType: "image",
        },
    ];

    return (
        <div className="relative w-full min-h-auto md:min-h-[749px] bg-[linear-gradient(180deg,rgba(6,49,68,0.9)_0%,rgba(35,116,143,0.9)_100%)] py-12 md:py-16 overflow-hidden">
            <div className="relative flex flex-col gap-8 md:gap-12 px-4">
                <StakingHeader />
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
