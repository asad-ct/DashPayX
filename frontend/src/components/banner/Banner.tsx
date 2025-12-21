import React from "react";

interface FeatureCard {
    id: string;
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
    iconClassName: string;
}

export const Banner = (): React.ReactNode => {
    const features: FeatureCard[] = [
        {
            id: "everyday-users",
            icon: "/users-people-svgrepo-com-1.svg",
            iconAlt: "Users people svgrepo",
            title: "For Everyday Users",
            description:
                "Send and receive value in seconds with low fees. DPX aims to make cross-border value transfer as simple as sending a message, especially for Pakistan ↔ GCC users and families.",
            iconClassName: "absolute top-4 left-[19px] w-[50px] h-[50px] aspect-[1]",
        },
        {
            id: "merchants-partners",
            icon: "/cooperate-svgrepo-com-1.svg",
            iconAlt: "Cooperate svgrepo",
            title: "For Merchants & Partners",
            description:
                "Over time, DashPayX plans to enable simple payment acceptance, loyalty use cases and integrations, so merchants can accept DPX while settling in their preferred currency.",
            iconClassName: "absolute top-4 left-3.5 w-[60px] h-[60px] aspect-[1]",
        },
        {
            id: "long-term-holders",
            icon: "/cup-svgrepo-com-1.svg",
            iconAlt: "Cup svgrepo com",
            title: "For Long-Term Holders",
            description:
                "DPX includes a staking-focused design. Holders will be able to lock their tokens (subject to future terms) to earn additional DPX as rewards, aligned with the long-term growth of the ecosystem.",
            iconClassName: "absolute top-3 left-[19px] w-[60px] h-[60px]",
        },
    ];

    return (
        <div className="w-full min-h-auto md:min-h-[734px] flex items-center justify-center bg-white">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-8 bg-white px-4 md:px-8 py-12 mx-0 md:mx-14 lg:mx-30">
                <div className="w-full lg:w-1/2 flex items-center justify-center md:mr-10">
                    <img
                        className="w-full max-w-[651px] h-auto object-cover"
                        alt="Banner"
                        src="/banner1.png"
                    />
                </div>

                <section className="w-full lg:w-1/2 flex flex-col gap-4 md:gap-6 bg-white">
                    <h1 className="[font-family:'Albert_Sans-Bold',Helvetica] font-bold text-[#272323] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0] leading-tight">
                        What is DashPayX (DPX)?
                    </h1>

                    <p className="[font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed">
                        DashPayX (DPX) is a BEP-20 token on the BNB Smart Chain designed for
                        real-world payments and long-term staking rewards. The project is
                        focused on enabling fast, low-friction transfers starting from
                        Pakistan and the GCC region, with a roadmap to expand globally.
                    </p>

                    <div className="flex flex-col gap-4 md:gap-6">
                        {features.map((feature) => (
                            <article
                                key={feature.id}
                                className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl border border-solid border-[#d1d1d1]"
                            >
                                <img
                                    className="w-10 md:w-12 h-10 md:h-12 flex-shrink-0"
                                    alt={feature.iconAlt}
                                    src={feature.icon}
                                />
                                <div className="flex-1">
                                    <h2 className="[font-family:'Albert_Sans-SemiBold',Helvetica] font-semibold text-[#29838a] text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight mb-1 md:mb-2">
                                        {feature.title}
                                    </h2>
                                    <p className="[font-family:'Albert_Sans-Regular',Helvetica] font-normal text-[#6e6e6e] text-xs sm:text-sm md:text-base lg:text-lg tracking-[0] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
