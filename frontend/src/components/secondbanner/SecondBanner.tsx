import React from "react";
import { SecondBannerContent } from "./SecondBannerContent";
import { SecondBannerImage } from "./SecondBannerImage";

export const SecondBanner = () => {
    const bulletPoints = [
        "Separate pools / options for different lock durations.",
        "Reward rates adjusted over time based on adoption and liquidity.",
        "All contracts to be verifiable on-chain before launch.",
        "Detailed documentation and \"how-to\" guides to be published prior to staking going live.",
    ];

    return (
        <section className="w-full min-h-auto bg-[#f9f9f9] py-12">
            <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-8 items-center">
                <div className="w-full flex items-center justify-center order-1 md:order-2 lg:w-1/2">
                    <SecondBannerImage />
                </div>

                <div className="w-full lg:w-1/2 order-2 md:order-1">
                    <SecondBannerContent
                        title="Planned Staking Parameters (Conceptual)"
                        description="Staking is currently in the design and planning phase. Nothing on this page is financial advice or a guarentee of future returns."
                        bulletPoints={bulletPoints}
                        ctaText="Start Your Demo"
                    />
                </div>
            </div>
        </section>

    );
};
