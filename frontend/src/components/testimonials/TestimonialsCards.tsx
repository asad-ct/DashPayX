import React from "react";
import { TestimonialsTransparencyCard } from "./TestimonialsGrid";

interface TransparencyCard {
    id: number;
    title: string;
    description: string;
    status: string;
    icon: string | null;
    iconType: "image" | "circle";
    bgColor: string;
    textColor: string;
    borderColor: string;
    starIcon: string;
}

interface TestimonialsCardsProps {
    cards: TransparencyCard[];
}

export const TestimonialsCards: React.FC<TestimonialsCardsProps> = ({
    cards,
}) => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 w-full px-4 md:px-0">
            {cards.map((card, index) => (
                <TestimonialsTransparencyCard key={card.id} card={card} index={index} />
            ))}
        </div>
    );
};
