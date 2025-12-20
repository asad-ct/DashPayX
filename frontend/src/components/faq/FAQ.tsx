import React from "react";
import { FAQAccordion } from "./FAQAccordion";
import { FAQImage } from "./FAQImage";
import { FAQDecorations } from "./FAQDecorations";

export const FAQ = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Gradient background */}
            <div className="absolute top-0 left-0 w-full min-h-full bg-[linear-gradient(180deg,rgba(6,49,68,0.9)_0%,rgba(35,116,143,0.9)_100%)]" />

            {/* Bottom white curved section */}
            <div className="absolute -bottom-60 left-1/2 -translate-x-1/2 w-[150%] max-w-[2400px] h-[520px] bg-white rounded-[50%]" />

            {/* Content container */}
            <div className="relative w-full mx-auto pt-24 pb-32 px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="[font-family:'Spline_Sans-SemiBold',Helvetica] font-semibold text-white text-[40px] tracking-[0] leading-7 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="w-full max-w-[1440px] mx-auto [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[30px]">
                        Some of the most common questions about DashPayX (DPX). This section will be expanded over time as the project and community grow.
                    </p>
                </div>

                {/* Content grid */}
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-center relative mx-auto max-w-7xl">
                    <div className="flex-shrink-0 z-10">
                        <FAQImage />
                    </div>

                    <div className="flex-1 z-20 max-w-[700px] lg:-ml-26">
                        <FAQAccordion />
                    </div>
                </div>
            </div>

            <FAQDecorations />
        </section>
    );
};
