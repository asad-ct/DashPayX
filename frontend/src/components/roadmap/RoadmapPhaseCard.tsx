import React from "react";

interface PhaseData {
    phaseNumber: string;
    title: string;
    description: string[];
}

interface RoadmapPhaseCardProps {
    phase: PhaseData;
    index: number;
}

export const RoadmapPhaseCard: React.FC<RoadmapPhaseCardProps> = ({
    phase,
    index,
}) => {
    return (
        <article className="w-full max-w-[600px] bg-neutral-50 rounded-xl overflow-hidden border border-solid border-[#cfcfcf] p-4 md:p-6 flex flex-col gap-3 md:gap-4">
            {/* Phase Badge and Title Container */}
            <div className="flex gap-3 md:gap-6 items-start">
                {/* Phase Badge */}
                <div className="w-[80px] md:w-[110px] h-[80px] md:h-[110px] flex-shrink-0 flex rounded-[100px_100px_0px_100px] bg-[linear-gradient(209deg,rgba(35,158,167,1)_0%,rgba(9,100,107,1)_100%)]">
                    <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-[100px] m-2">
                        <div className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-black text-xs md:text-sm text-center">
                            Phase
                        </div>
                        <div className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#d71515] text-2xl md:text-4xl text-center">
                            {phase.phaseNumber}
                        </div>
                    </div>
                </div>

                {/* Title and Description */}
                <div className="flex-1 flex flex-col gap-2 md:gap-3">
                    <h2 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-lg md:text-2xl tracking-[0] leading-[24px] md:leading-[30px]">
                        {phase.title}
                    </h2>

                    <div className="flex flex-col gap-2 md:gap-3">
                        {phase.description.map((line, i) => (
                            <div key={i} className="flex gap-2 md:gap-3 items-start">
                                {/* Checkmark Icon */}
                                <div className="w-[16px] md:w-[20px] h-[16px] md:h-[20px] bg-[#d71515] rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <img
                                        className="w-2 md:w-3 h-2 md:h-3"
                                        alt="Check"
                                        src="/check.png"
                                    />
                                </div>
                                {/* Description Text */}
                                <span className="[font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-xs md:text-base tracking-[0] leading-[18px] md:leading-[24px]">
                                    {line}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};
