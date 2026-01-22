"use client";

import React from "react";
import { FAQAccordion } from "./FAQAccordion";
import { FAQImage } from "./FAQImage";
import { FAQDecorations } from "./FAQDecorations";
import { useContent } from "@/hooks/useContent";

export const FAQ = () => {
    const { data: contentData } = useContent('faq');

    const title = contentData && 'content' in contentData ? contentData.content.title : 'Frequently Asked Questions';
    const subtitle = contentData && 'content' in contentData ? contentData.content.subtitle : 'Some of the most common questions about DashPayX (DPX). This section will be expanded over time as the project and community grow.';

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Gradient background */}
            <div className="absolute top-0 left-0 w-full min-h-full bg-[linear-gradient(180deg,rgba(6,49,68,0.9)_0%,rgba(35,116,143,0.9)_100%)] z-0" />

            {/* Bottom white curved section */}
            <div className="absolute -bottom-32 sm:-bottom-48 md:-bottom-60 left-1/2 -translate-x-1/2 w-[150%] max-w-[2400px] h-[300px] sm:h-[400px] md:h-[520px] bg-white rounded-[50%] z-0" />

            {/* Content container */}
            <div className="relative w-full mx-auto pt-12 md:pt-24 pb-20 md:pb-32 px-4 lg:px-8 z-20">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="[font-family:'Spline_Sans-SemiBold',Helvetica] font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[0] leading-7 md:leading-10 mb-3 md:mb-6">
                        {title}
                    </h2>
                    <p className="w-full lg:w-[50%] max-w-[1440px] mx-auto [font-family:'Inter-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[24px] md:leading-[30px]">
                        {subtitle}
                    </p>
                </div>

                {/* Content grid */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-center relative mx-auto max-w-7xl">
                    <div className="flex-shrink-0 w-full sm:w-[280px] md:w-[350px] lg:w-[700px]">
                        <FAQImage />
                    </div>

                    <div className="flex-1 max-w-[700px] w-full px-0 md:px-4 lg:-ml-26">
                        <FAQAccordion />
                    </div>
                </div>
            </div>

            <FAQDecorations />
        </section>
    );
};
