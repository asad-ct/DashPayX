import React from "react";

interface RoadmapFooterProps {
    footerText?: string;
}

export const RoadmapFooter: React.FC<RoadmapFooterProps> = ({ footerText }) => {
    if (!footerText) return null;

    return (
        <footer className="w-full flex justify-center py-8 px-4">
            <p className="max-w-[949px] [font-family:'Albert_Sans-Light',Helvetica] font-light text-[#6e6e6e] text-lg text-center tracking-[0] leading-[26px]">
                {footerText}
            </p>
        </footer>
    );
};
