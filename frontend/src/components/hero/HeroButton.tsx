import React from "react";

interface HeroButtonProps {
    text: string;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

export const HeroButton: React.FC<HeroButtonProps> = ({
    text,
    variant = "primary",
    onClick,
}) => {
    const baseClasses = "w-[234px] h-[55px] flex items-center justify-center rounded-[100px] overflow-hidden transition-all";
    const variantClasses = {
        primary: "bg-white text-[#174862] hover:bg-gray-100 hover:shadow-lg",
        secondary: "border-2 border-solid border-white text-white hover:bg-white/10",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]}`}
        >
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-lg tracking-[0] leading-[35px] whitespace-nowrap">
                {text}
            </span>
        </button>
    );
};
