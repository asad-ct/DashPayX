"use client";

import React from "react";
import { TestimonialsHeader } from "./TestimonialsHeader";
import { TestimonialsCards } from "./TestimonialsCards";
import { TestimonialsFooter } from "./TestimonialsFooter";
import { TestimonialDecorations } from "./TestimonialDecorations";

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
    const transparencyCards: TransparencyCard[] = [
        {
            id: 1,
            title: "Contract Address",
            description:
                "The final mainnet contract address for DPX will be published here once deployment is completed and verified.",
            status: "To be announced",
            icon: "/ellipse-44.png",
            iconType: "image",
            bgColor: "bg-[#f0f0f0]",
            textColor: "text-[#515151]",
            borderColor: "border-[#4fc3f7]",
            starIcon: "/star-1.svg",
        },
        {
            id: 2,
            title: "BscScan Listing",
            description:
                "Once live, the verified contract and token details will be visible on BscScan so anyone can independently inspect supply, holders and transactions.",
            status: "Planned",
            icon: "/image.png",
            iconType: "image",
            bgColor: "bg-[#29838a]",
            textColor: "text-white",
            borderColor: "border-black",
            starIcon: "/star-1.svg",
        },
        {
            id: 3,
            title: "Whitepaper",
            description:
                "A detailed whitepaper describing the DashPayX vision, tokenomics, staking model and payment strategy is being prepared and will be shared with the community.",
            status: "In preparation",
            icon: null,
            iconType: "circle",
            bgColor: "bg-[#f0f0f0]",
            textColor: "text-[#515151]",
            borderColor: "border-[#4fc3f7]",
            starIcon: "/star-1.svg",
        },
        {
            id: 4,
            title: "Smart Contract Audit",
            description:
                "Before large-scale adoption, DashPayX intends to engage an independent auditor to review the main contracts for security issues and best practices.",
            status: "Planned",
            icon: null,
            iconType: "circle",
            bgColor: "bg-[#f0f0f0]",
            textColor: "text-[#515151]",
            borderColor: "border-[#4fc3f7]",
            starIcon: "/star-1.svg",
        },
    ];

    return (
        <section className="relative w-full bg-neutral-50 flex flex-col gap-6 md:gap-8 py-8 md:py-16 px-4">
            <TestimonialDecorations />

            <TestimonialsHeader />

            <TestimonialsCards cards={transparencyCards} />

            <TestimonialsFooter />
        </section>
    );
};
