import React from "react";
import Image from "next/image";

interface StakingFeature {
    id: number;
    title: string;
    description: string;
    icon: string | { vector: string; image: string; vector2: string };
    iconType: "svg" | "composite" | "image";
}

interface StakingCardProps {
    feature: StakingFeature;
    index: number;
}

export const StakingCard: React.FC<StakingCardProps> = ({ feature, index }) => {
    return (
        <article
            className="w-full md:w-[452px] min-h-auto md:min-h-[381px] flex flex-col items-center rounded-xl overflow-hidden border border-solid border-white bg-[linear-gradient(180deg,rgba(62,158,192,1)_0%,rgba(30,69,86,1)_100%)] p-6 md:p-8"
        >
            {/* Icon Background Circle */}
            <div
                className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] bg-white rounded-full border-2 border-solid flex items-center justify-center mb-4 md:mb-6"
                aria-hidden="true"
            >
                {/* Icon Image */}
                {feature.iconType === "image" && (
                    <img
                        className="w-[40px] md:w-[50px] h-[40px] md:h-[50px] object-cover"
                        alt=""
                        src={feature.icon as string}
                        aria-hidden="true"
                    />
                )}

                {/* Icon SVG */}
                {feature.iconType === "svg" && (
                    <img
                        className="w-[40px] md:w-[47px] h-[40px] md:h-[47px]"
                        alt=""
                        src={feature.icon as string}
                        aria-hidden="true"
                    />
                )}

                {/* Icon Composite */}
                {feature.iconType === "composite" && (
                    <div className="w-[55px] h-[47px] relative" aria-hidden="true">
                        <img
                            className="absolute w-[25.41%] h-[27.76%] top-[5.24%] left-[47.31%]"
                            alt=""
                            src={(feature.icon as any).vector}
                        />
                        <img
                            className="absolute w-full h-[71.10%] top-[28.90%] left-0"
                            alt=""
                            src={(feature.icon as any).image}
                        />
                        <img
                            className="absolute w-[37.29%] h-[46.09%] top-0 left-[39.12%]"
                            alt=""
                            src={(feature.icon as any).vector2}
                        />
                    </div>
                )}
            </div>

            {/* Title */}
            <h2 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-lg md:text-2xl text-center tracking-[0] leading-tight mb-3 md:mb-4">
                {feature.title}
            </h2>

            {/* Description */}
            <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-sm md:text-lg text-center tracking-[0] leading-relaxed">
                {feature.description}
            </p>
        </article>
    );
};
