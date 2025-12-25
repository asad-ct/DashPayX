import React from "react";

interface TestimonialsHeaderProps {
    title?: string;
    subtitle?: string;
}

export const TestimonialsHeader: React.FC<TestimonialsHeaderProps> = ({
    title = 'Trust & Transparency',
    subtitle = 'DashPayX is being built with a clear focus on long-term credibility. As the project progresses, key technical and legal artefacts will be shared openly so that holders, partners and regulators can independently review the ecosystem.'
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full mb-4 md:mb-8">
            <div className="text-center">
                <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#29838a] text-sm md:text-lg lg:text-xl tracking-[0] leading-[25px] mb-2 md:mb-4">
                    TESTIMONIALS
                </p>
                <h2 className="[font-family:'Khula-Bold',Helvetica] font-bold text-[#353535] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[0] leading-[40px] md:leading-[55px]">
                    {title}
                </h2>
            </div>

            <p className="max-w-[791px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-[22px] md:leading-[27px]">
                {subtitle}
            </p>
        </div>
    );
};
