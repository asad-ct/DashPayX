import React from "react";
import { HeroButton } from "./HeroButton";

export const HeroContent = () => {
    return (
        <div className="w-full flex flex-col gap-4 md:gap-6">
            <h1 className="[font-family:'Albert_Sans-ExtraBold',Helvetica] font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                BEP-20 . BNB SMART CHAIN
                <br />
                REAL - WORLD PAYMENTS
            </h1>

            <p className="max-w-2xl [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed">
                A utility - first BEP-20 toke designed for everyday payments
                <br />
                starting form Pakistan and the GCC. Send value in seconds
            </p>

            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <HeroButton text="Token Distribution" variant="primary" />
                <HeroButton text="Whitepaper" variant="secondary" />
            </div>
        </div>
    );
};
