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
        <div className="relative w-[338px] flex flex-col items-center">
            {/* Card Container */}
            <div className="w-full h-[273px] flex flex-col items-center gap-4 bg-white rounded-xl overflow-hidden border border-solid border-[#dfdfdf] pt-8 pb-6 px-6">
                {/* Title */}
                <h2 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#29838a] text-[25px] text-center tracking-[0] leading-[25px] pt-6">
                    {card.title}
                </h2>

                {/* Description */}
                <p className="w-full [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-lg text-center tracking-[0] leading-[27px] mt-4">
                    {card.description}
                </p>
            </div>
        </div>
    );
};
