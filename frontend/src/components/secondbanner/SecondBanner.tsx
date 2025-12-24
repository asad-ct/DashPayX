"use client";

import React from "react";
import { SecondBannerContent } from "./SecondBannerContent";
import { SecondBannerImage } from "./SecondBannerImage";
import { Loader } from "../common/Loader";
import { useContent } from "@/hooks/useContent";

export const SecondBanner = () => {
    const { data: contentData, loading, error } = useContent('secondbanner');

    if (loading) {
        return <Loader />;
    }

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading banner content</div>;
    }

    const secondBannerData = contentData.content;
    const title = secondBannerData.title;
    const description = secondBannerData.description;
    const bulletPoints = secondBannerData.bulletPoints || [];
    const ctaText = secondBannerData.ctaText;

    return (
        <section className="w-full min-h-auto bg-[#f9f9f9] py-12">
            <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-8 items-center">
                <div className="w-full flex items-center justify-center order-1 md:order-2 lg:w-1/2">
                    <SecondBannerImage />
                </div>

                <div className="w-full lg:w-1/2 order-2 md:order-1">
                    <SecondBannerContent
                        title={title}
                        description={description}
                        bulletPoints={bulletPoints}
                        ctaText={ctaText}
                    />
                </div>
            </div>
        </section>
    );
};
