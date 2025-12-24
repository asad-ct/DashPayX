import React from "react";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { FeaturesList } from "./FeaturesList";

interface ContactCardProps {
    formTitle?: string;
    formSubtitle?: string;
}

export const ContactCard = ({ formTitle = "Ready to get started?", formSubtitle = "Start your free trial." }: ContactCardProps) => {
    return (
        <section className="w-full md:w-[900px] h-auto md:h-[590px] bg-white rounded-[15px] overflow-hidden shadow-[3px_4px_12px_3px_#00000026] relative">
            <div className="text-center pt-6 md:pt-10 mb-4 md:mb-8 px-4">
                <h2 className="[font-family:'Khula-SemiBold',Helvetica] font-semibold text-black text-2xl md:text-[40px] tracking-[0] mb-2">
                    {formTitle}
                </h2>
                <h3 className="[font-family:'Khula-Bold',Helvetica] font-bold text-[#d70404] text-2xl md:text-[40px] tracking-[0]">
                    {formSubtitle}
                </h3>
            </div>

            <FeaturesList />

            <ContactForm />

            <div className="absolute top-[60px] md:top-[89px] right-4 md:right-[103px] w-[100px] md:w-[152px] h-[100px] md:h-[153px] hidden md:block">
                <Image
                    src="/image-14.png"
                    alt="Contact illustration"
                    width={152}
                    height={153}
                    className="object-cover aspect-[0.96]"
                />
            </div>
        </section>
    );
};
