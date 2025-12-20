import React from "react";
import Image from "next/image";

interface NavigationButtonProps {
    direction: "left" | "right";
    onClick?: () => void;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
    direction,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className="w-[61px] h-[61px] bg-neutral-200 rounded-[30.5px] flex items-center justify-center hover:bg-neutral-300 transition-colors"
            aria-label={`Navigate ${direction}`}
        >
            <Image
                src={direction === "left" ? "/arrow-left.png" : "/arrow-right.png"}
                alt=""
                width={36}
                height={36}
                className="aspect-[1]"
            />
        </button>
    );
};
