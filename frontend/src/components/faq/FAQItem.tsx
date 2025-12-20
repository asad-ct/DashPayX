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
        <div className="w-full mb-4">
            <button
                onClick={onToggle}
                className={`w-full h-[70px] flex items-center justify-between px-6 transition-all ${isOpen
                    ? "bg-[#29838a] text-white rounded-t-lg border border-[#196f75]"
                    : "bg-white text-[#7d7d7d] rounded-lg border border-[#d9d9d9] hover:bg-gray-50"
                    }`}
            >
                <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-xl tracking-[0] leading-7 text-left">
                    {question}
                </p>
                <Image
                    src="/keyboard_arrow_down.png"
                    alt=""
                    width={24}
                    height={24}
                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="w-full bg-[#eaf6ff] rounded-b-lg border border-[#fbf7ed] p-6">
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#626262] text-lg tracking-[0] leading-7">
                        {answer}
                    </p>
                </div>
            )}
        </div>
    );
};
