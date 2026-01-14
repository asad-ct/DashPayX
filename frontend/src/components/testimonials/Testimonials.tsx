"use client";

import React from "react";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialsCards } from "./TestimonialsCards";
import { TestimonialsFooter } from "./TestimonialsFooter";
import { TestimonialDecorations } from "./TestimonialDecorations";
import { useContent } from "@/hooks/useContent";

interface TransparencyCard {
    id: number;
    title: string;
    description: string;
    status: string;
    icon: string | null;
    iconType: "image" | "circle";
    bgColor: string;
    textColor: string;
    borderColor: string;
    starIcon: string;
}

export const Testimonials = () => {
    const { data: contentData, error } = useContent('testimonials');

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading testimonials content</div>;
    }

    const transparencyCards: TransparencyCard[] = contentData.content.cards?.map((card: any, index: number) => ({
        id: index + 1,
        title: card.title,
        description: card.description,
        status: card.status,
        icon: card.icon || null,
        iconType: card.iconType || "image",
        bgColor: card.bgColor || "bg-[#f0f0f0]",
        textColor: card.textColor || "text-[#515151]",
        borderColor: card.borderColor || "border-[#29848a]",
        starIcon: card.starIcon || "/star-1.svg",
    })) || [];

    const title = contentData.content.title;
    const subtitle = contentData.content.subtitle;
    const footerText = contentData.content.footerText;

    return (
        <section className="relative w-full bg-neutral-50 flex flex-col gap-6 md:gap-8 py-8 md:py-16 px-4">
            <TestimonialDecorations />

            <div className="relative z-20">
                <TestimonialsHeader title={title} subtitle={subtitle} />

                <TestimonialsCards cards={transparencyCards} />

                <TestimonialsFooter footerText={footerText} />
            </div>
        </section>
    );
};
