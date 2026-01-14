import React from "react";
import { TokenomicsCard } from "./TokenomicsCard";

interface TokenomicsCardData {
    id: number;
    title: string;
    description: string;
}

interface TokenomicsGridProps {
    cards: TokenomicsCardData[];
    footerText?: string;
}

export const TokenomicsGrid: React.FC<TokenomicsGridProps> = ({ cards, footerText }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full px-4">
            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-8">
                {cards.map((card, index) => (
                    <TokenomicsCard key={card.id} card={card} index={index} />
                ))}
            </div>

            {/* Footer Note */}
            {footerText && (
                <p className="max-w-[1051px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-base text-center tracking-[0] leading-8">
                    {footerText}
                </p>
            )}
        </div>
    );
};
