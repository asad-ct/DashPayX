"use client";

import React from "react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

interface FeatureCard {
    id: string;
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
    iconClassName: string;
}

export const Banner = (): React.ReactNode => {
    const { data: contentData, error } = useContent('banner');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading banner content</div>;
    }

    const bannerData = contentData.content;
    const heading = bannerData.heading;
    const description = bannerData.description;
    const features: FeatureCard[] = bannerData.features || [];

    // Get image from database or use default
    let imageSrc = '';
    if (bannerData.image) {
        imageSrc = bannerData.image.startsWith('/api/')
            ? `${apiUrl.replace('/api', '')}${bannerData.image}`
            : bannerData.image;
    }

    return (
        <div className="w-full min-h-auto md:min-h-[734px] flex items-center justify-center bg-white">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 bg-white px-4 md:px-8 py-12 mx-0 md:mx-14 lg:mx-30">
                <div className="w-full lg:w-1/2 flex items-center justify-center md:mr-10">
                    <Image
                        className="w-full max-w-[651px] h-auto object-cover"
                        alt="Banner"
                        src={imageSrc}
                        width={651}
                        height={500}
                        unoptimized
                    />
                </div>

                <section className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 bg-white">
                    <h1 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                        {heading}
                    </h1>

                    <p className="[font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed">
                        {description}
                    </p>

                    <div className="flex flex-col gap-4 md:gap-6">
                        {features.map((feature) => (
                            <article
                                key={feature.id}
                                className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-solid border-[#d1d1d1]"
                            >
                                <img
                                    className="w-10 md:w-12 h-10 md:h-12 flex-shrink-0"
                                    alt={feature.iconAlt}
                                    src={feature.icon}
                                />
                                <div className="flex-1">
                                    <h2 className="[font-family:'Albert_Sans-SemiBold',Helvetica] font-semibold text-[#29838a] text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight mb-1 md:mb-2">
                                        {feature.title}
                                    </h2>
                                    <p className="[font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-xs sm:text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
