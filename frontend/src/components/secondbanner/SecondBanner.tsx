"use client";

import React from "react";
import { SecondBannerContent } from "./SecondBannerContent";
import { SecondBannerImage } from "./SecondBannerImage";
import { useContent } from "@/hooks/useContent";

export const SecondBanner = () => {
    const { data: contentData, error } = useContent('secondbanner');

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading banner content</div>;
    }

    const secondBannerData = contentData.content;
    const title = secondBannerData.title;
    const description = secondBannerData.description;
    const rawBulletPoints = secondBannerData.bulletPoints || [];
    // Convert objects like {text: "..."} to strings
    const bulletPoints = rawBulletPoints.map((item: any) =>
        typeof item === 'string' ? item : item.text || ''
    );
    const ctaText = secondBannerData.ctaText;
    const ctaUrl = secondBannerData.ctaUrl;

    return (
        <section className="w-full min-h-auto bg-[#f9f9f9] py-12">
            <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-28 items-center">
                <div className="w-full flex items-start justify-start order-1 md:order-2 lg:w-2/5">
                    <SecondBannerImage />
                </div>

                <div className="w-full lg:w-3/5 order-2 md:order-1 flex items-start justify-start">
                    <SecondBannerContent
                        title={title}
                        description={description}
                        bulletPoints={bulletPoints}
                        ctaText={ctaText}
                        ctaUrl={ctaUrl}
                    />
                </div>
            </div>
        </section>
    );
};
