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
        <section className="w-full min-h-[667px] flex items-center justify-center bg-[#f9f9f9] py-12">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 lg:gap-16 px-0 lg:px-8 items-center">
                <div className="w-full lg:w-1/2 mr-10">
                    <SecondBannerContent
                        title="Planned Staking Parameters (Conceptual)"
                        description="Staking is currently in the design and planning phase. Nothing on this page is financial advice or a guarentee of future returns."
                        bulletPoints={bulletPoints}
                        ctaText="Start Your Demo"
                    />
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <SecondBannerImage />
                </div>
            </div>
        </section>
    );
};
