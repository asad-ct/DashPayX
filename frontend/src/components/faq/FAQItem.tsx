"use client";

import React from "react";
import Image from "next/image";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    isOpen,
    onToggle,
}) => {
    return (
        <div className="w-full mb-3 md:mb-4">
            <button
                onClick={onToggle}
                className={`w-full h-auto md:h-[70px] flex items-center justify-between px-4 md:px-6 py-3 md:py-0 gap-3 transition-all ${isOpen
                    ? "bg-[#29838a] text-white rounded-t-lg border border-[#196f75]"
                    : "bg-white text-[#7d7d7d] rounded-lg border border-[#d9d9d9] hover:bg-gray-50"
                    }`}
            >
                <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-[0] leading-5 md:leading-7 text-left flex-1">
                    {question}
                </p>
                <Image
                    src="/keyboard_arrow_down.png"
                    alt=""
                    width={24}
                    height={24}
                    className={`flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="w-full bg-[#eaf6ff] rounded-b-lg border border-[#fbf7ed] p-4 md:p-6">
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#626262] text-xs sm:text-sm md:text-base tracking-[0] leading-5 md:leading-6">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};
