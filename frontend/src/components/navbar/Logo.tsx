import React from "react";

export const Logo = () => {
    return (
        <div className="relative w-[70px] h-[70px] aspect-[1] bg-[linear-gradient(134deg,rgba(41,132,138,1)_0%,rgba(53,108,139,1)_68%,rgba(20,61,88,1)_100%)] rounded-[100px] overflow-hidden">
            <div className="absolute top-1.5 left-1.5 w-[39px] h-[39px] rounded-[100px] blur-[2px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)] opacity-80" />
            <div className="absolute top-[calc(50.00%_-_19px)] left-[calc(50.00%_-_30px)] [-webkit-text-stroke:1px_#35758d] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-white text-[25px] text-center tracking-[0] leading-[35px] whitespace-nowrap">
                DPX
            </div>
        </div>
    );
};
