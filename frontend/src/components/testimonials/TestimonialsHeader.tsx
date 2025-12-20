import React from "react";

export const TestimonialsHeader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full">
            <div className="text-center">
                <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#29838a] text-xl tracking-[0] leading-[25px] mb-4">
                    TESTIMONIALS
                </p>
                <h2 className="[font-family:'Khula-Bold',Helvetica] font-bold text-[#353535] text-[40px] tracking-[0] leading-[55px]">
                    Trust &amp; Transparency
                </h2>
            </div>

            <p className="max-w-[791px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-lg text-center tracking-[0] leading-[27px]">
                DashPayX is being built with a clear focus on long-term credibility.
                As the project progresses, key technical and legal artefacts will be
                shared openly so that holders, partners and regulators can
                independently review the ecosystem.
            </p>
        </div>
    );
};
