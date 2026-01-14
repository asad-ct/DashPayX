import React from "react";

interface HeroButtonProps {
    text: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
    link?: string;
}

export const HeroButton: React.FC<HeroButtonProps> = ({
    text,
    variant = "primary",
    onClick,
    link,
}) => {
    const baseClasses = "flex items-center justify-center rounded-[100px] overflow-hidden transition-all p-3 px-4";
    const variantClasses = {
        primary: "bg-white text-[#174862] hover:bg-gray-100 hover:shadow-lg",
        secondary: "border-2 border-solid border-white text-white hover:bg-white/10",
    };

    const handleClick = () => {
        if (link) {
            // Check if it's an external URL
            if (link.startsWith('http://') || link.startsWith('https://')) {
                window.open(link, '_blank', 'noopener,noreferrer');
            } else {
                // If it doesn't have a protocol, add https://
                window.open(`https://${link}`, '_blank', 'noopener,noreferrer');
            }
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`${baseClasses} ${variantClasses[variant]} cursor-pointer`}
        >
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-xs sm:text-sm md:text-lg tracking-[0] leading-[35px] whitespace-nowrap">
                {text}
            </span>
        </button>
    );
};
