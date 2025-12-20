import React from "react";

export const TokenomicsHeader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
            <h1 className="[font-family:'Khula-Bold',Helvetica] font-bold text-[#353535] text-[40px] text-center tracking-[0] leading-[55px]">
                Tokenomics
            </h1>

            <p className="max-w-[737px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-lg text-center tracking-[0] leading-[27px]">
                DashPayX (DPX) is designed to be simple, transparent and fair — no
                hidden taxes, no private presale games. A clean structure that is easy
                to understand for both newcomers and experienced holders.
            </p>
        </div>
    );
};
