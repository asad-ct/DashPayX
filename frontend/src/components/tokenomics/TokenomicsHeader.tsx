import React from "react";

interface TokenomicsHeaderProps {
    title?: string;
    subtitle?: string;
}

export const TokenomicsHeader: React.FC<TokenomicsHeaderProps> = ({
    title = 'Tokenomics',
    subtitle = 'DashPayX (DPX) is designed to be simple, transparent and fair — no hidden taxes, no private presale games. A clean structure that is easy to understand for both newcomers and experienced holders.'
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full px-4">
            <h1 className="[font-family:'Khula-Bold',Helvetica] font-bold text-[#353535] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center tracking-[0] leading-[40px] md:leading-[55px]">
                {title}
            </h1>

            <p className="max-w-[737px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-[22px] md:leading-[27px]">
                {subtitle}
            </p>
        </div>
    );
};
