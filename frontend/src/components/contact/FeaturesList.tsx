"use client";

import React from "react";

interface Feature {
    text: string;
}

const features: Feature[] = [
    { text: "Free 30 days trial" },
    { text: "Exclusive Support" },
    { text: "No Fees" },
];

export const FeaturesList = () => {
    return (
        <div className="flex flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 px-4 md:px-0">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div className="w-[13px] h-[13px] bg-[#4fc3f7] rounded-full flex-shrink-0" />
                    <span className="[font-family:'Khula-Regular',Helvetica] font-normal text-black text-xs sm:text-sm md:text-base lg:text-lg tracking-[0]">
                        {feature.text}
                    </span>
                </div>
            ))}
        </div>
    );
};
