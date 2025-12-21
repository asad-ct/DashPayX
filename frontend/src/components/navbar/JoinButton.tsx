"use client";

import React from "react";

export const JoinButton = () => {
    const handleClick = () => {
        const element = document.querySelector("#contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={handleClick}
            className="w-[120px] md:w-[185px] h-[40px] md:h-[55px] bg-[#29838a] rounded-[100px] overflow-hidden flex items-center justify-center transition-all hover:bg-[#237a81] hover:shadow-lg cursor-pointer"
        >
            <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-xs md:text-lg tracking-[0] leading-[35px] whitespace-nowrap">
                Join DPX
            </span>
        </button>
    );
};
