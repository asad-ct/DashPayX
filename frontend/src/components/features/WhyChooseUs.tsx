import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { FeatureCard } from "./FeatureCard";

interface Feature {
    image: string;
    title: string;
    description: string;
    imageAspect?: string;
}

export const WhyChooseUs = () => {
    const features: Feature[] = [
        {
            image: "/image-41.png",
            title: "Investment planning services",
            description:
                "Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.",
            imageAspect: "1.16",
        },
        {
            image: "/image-44.png",
            title: "Manage Your Trading Effectively",
            description:
                "Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.",
            imageAspect: "1.32",
        },
        {
            image: "/image-43.png",
            title: "System Designed by Experts",
            description:
                "Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.",
            imageAspect: "0.94",
        },
        {
            image: "/image-42.png",
            title: "Investment planning services",
            description:
                "Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.",
            imageAspect: "1.29",
        },
    ];

    return (
        <section className="relative w-full h-[786px] bg-white py-16">
            <div className="w-full max-w-[1440px] mx-auto px-4">
                <SectionHeading
                    title="Why Choose Investment by DPX?"
                    subtitle="Praesent imperdiet tellus et risus auctor which will make volutpat lacus."
                />

                <div className="mt-12 grid grid-cols-2 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            image={feature.image}
                            title={feature.title}
                            description={feature.description}
                            imageAspect={feature.imageAspect}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
