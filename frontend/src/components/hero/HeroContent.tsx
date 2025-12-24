"use client";

import React from "react";
import { HeroButton } from "./HeroButton";
import { useContent } from "@/hooks/useContent";

export const HeroContent = () => {
    const { data: contentData, error } = useContent('hero');

    if (!contentData || !('content' in contentData)) {
        return null;
    }

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-white">Error loading content</div>;
    }

    const content = contentData.content;

    return (
        <div className="w-full flex flex-col gap-4 md:gap-6 px-0 md:px-12 lg:px-18">
            <h1 className="[font-family:'Albert_Sans-ExtraBold',Helvetica] font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                {content.title?.split('\n').map((line: string, i: number) => (
                    <span key={i}>
                        {line}
                        {i < content.title.split('\n').length - 1 && <br />}
                    </span>
                ))}
            </h1>

            <p className="max-w-2xl [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed">
                {content.description?.split('\n').map((line: string, i: number) => (
                    <span key={i}>
                        {line}
                        {i < content.description.split('\n').length - 1 && <br />}
                    </span>
                ))}
            </p>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <HeroButton text={content.primaryCta?.text} variant="primary" />
                <HeroButton text={content.secondaryCta?.text} variant="secondary" />
            </div>
        </div>
    );
};
