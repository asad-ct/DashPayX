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
        <div className="flex gap-8 justify-center mb-8">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                    <div className="w-[13px] h-[13px] bg-[#4fc3f7] rounded-full" />
                    <span className="[font-family:'Khula-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
                        {feature.text}
                    </span>
                </div>
            ))}
        </div>
    );
};
