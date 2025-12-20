import React from "react";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { FeaturesList } from "./FeaturesList";

export const ContactCard = () => {
    return (
        <section className="w-[900px] h-[590px] bg-white rounded-[15px] overflow-hidden shadow-[3px_4px_12px_3px_#00000026] relative">
            <div className="text-center pt-10 mb-8">
                <h2 className="[font-family:'Khula-SemiBold',Helvetica] font-semibold text-black text-[40px] tracking-[0] mb-2">
                    Ready to get started?
                </h2>
                <h3 className="[font-family:'Khula-Bold',Helvetica] font-bold text-[#d70404] text-[40px] tracking-[0]">
                    Start your free trial.
                </h3>
            </div>

            <FeaturesList />

            <ContactForm />

            <div className="absolute top-[89px] right-[103px] w-[152px] h-[153px]">
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
