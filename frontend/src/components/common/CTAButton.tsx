import React from "react";

interface CTAButtonProps {
    text: string;
    onClick?: () => void;
    link?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick, link }) => {
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
            className="w-[160px] md:w-[237px] h-[45px] md:h-[60px] bg-[#29838a] rounded-[10px] overflow-hidden flex items-center justify-center transition-all hover:bg-[#237a81] hover:shadow-lg cursor-pointer"
        >
            <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-sm md:text-lg lg:text-xl tracking-[0] leading-[28px] md:leading-8 whitespace-nowrap">
                {text}
            </span>
        </button>
    );
};
