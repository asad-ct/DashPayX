import React from "react";

interface CTAButtonProps {
    text: string;
    onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-[160px] md:w-[237px] h-[45px] md:h-[60px] bg-[#29838a] rounded-[10px] overflow-hidden flex items-center justify-center transition-all hover:bg-[#237a81] hover:shadow-lg"
        >
            <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-sm md:text-lg lg:text-xl tracking-[0] leading-[28px] md:leading-8 whitespace-nowrap">
                {text}
            </span>
        </button>
    );
};
