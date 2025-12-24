"use client";

import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { FeatureCard } from "./FeatureCard";
import { useContent } from "@/hooks/useContent";

interface Feature {
    image: string;
    title: string;
    description: string;
    imageAspect?: string;
}

export const WhyChooseUs = () => {
    const { data: contentData } = useContent('features');

    if (!contentData || !('content' in contentData)) {
        return null;
    }

    const features: Feature[] = contentData.content.features?.map((feature: any) => ({
        image: feature.image,
        title: feature.title,
        description: feature.description,
        imageAspect: feature.imageAspect || "1",
    })) || [];

    return (
        <section className="relative w-full min-h-auto md:min-h-[786px] bg-white py-8 md:py-16">
            <div className="w-full max-w-[1440px] mx-auto px-4">
                <SectionHeading
                    title={contentData.content.title}
                    subtitle={contentData.content.subtitle}
                />

                <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            imageAspect={feature.imageAspect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
