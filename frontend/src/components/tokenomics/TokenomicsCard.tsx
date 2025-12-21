import React from "react";

interface TokenomicsCardProps {
    card: {
        id: number;
        title: string;
        description: string;
    };
    index: number;
}

export const TokenomicsCard: React.FC<TokenomicsCardProps> = ({
    card,
    index,
}) => {
    return (
        <div className="relative w-full sm:w-[280px] md:w-[338px] flex flex-col items-center">
            {/* Card Container */}
            <div className="w-full h-auto md:h-[273px] flex flex-col items-center gap-3 md:gap-4 bg-white rounded-xl overflow-hidden border border-solid border-[#dfdfdf] pt-4 md:pt-8 pb-4 md:pb-6 px-4 md:px-6">
                {/* Title */}
                <h2 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#29838a] text-lg md:text-[25px] text-center tracking-[0] leading-[25px] pt-2 md:pt-6">
                    {card.title}
                </h2>

                {/* Description */}
                <p className="w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-xs sm:text-sm md:text-lg text-center tracking-[0] leading-[20px] md:leading-[27px] mt-2 md:mt-4">
                    {card.description}
                </p>
            </div>
        </div>
    );
};
