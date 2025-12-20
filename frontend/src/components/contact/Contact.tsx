import React from "react";
import Image from "next/image";
import { ContactCard } from "./ContactCard";
import { Footer } from "./Footer";
import { ContactDecorations } from "./ContactDecorations";

export const Contact = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(6,49,68,0.9)_0%,rgba(35,116,143,0.9)_100%)]">
            <ContactDecorations />

            {/* Header */}
            <div className="relative text-center pt-12 mb-14">
                <h2 className="[font-family:'Khula-SemiBold',Helvetica] font-semibold text-[40px] text-center tracking-[0] leading-[55px] mb-4">
                    <span className="text-[#353535]">
                        Join the <span className="text-[#29838a]">DashPayX</span> (DPX) Community <br />
                    </span>
                </h2>
                <p className="max-w-[757px] mx-auto mt-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-lg text-center tracking-[0] leading-[12px]">
                    DashPayX will grow communit-first. Join our official channels to follow development updates,
                </p>
                <p className="max-w-[757px] mx-auto mt-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-lg text-center tracking-[0] leading-[27px]">
                    exchange listings, staking updates, roadmap execution and real-world payment adoption.
                </p>
            </div>

            {/* QR Codes */}
            <div className="relative flex justify-center gap-12 mb-16">
                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] bg-white rounded-lg p-2 mb-4 border border-solid border-neutral-300 shadow-md">
                        <Image
                            src="/qr1.png"
                            alt="Telegram Community QR Code"
                            width={196}
                            height={196}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-center tracking-[0] leading-[20px]">
                        Telegram Community
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] bg-white rounded-lg p-2 mb-4 border border-solid border-neutral-300 shadow-md">
                        <Image
                            src="/qr2.png"
                            alt="Announcements Channel QR Code"
                            width={196}
                            height={196}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-center tracking-[0] leading-[20px]">
                        Announcements Channel
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-[200px] h-[200px] bg-white rounded-lg p-2 mb-4 border border-solid border-neutral-300 shadow-md">
                        <Image
                            src="/qr3.png"
                            alt="X / Twitter QR Code"
                            width={196}
                            height={196}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-center tracking-[0] leading-[20px]">
                        X / Twitter
                    </p>
                </div>
            </div>

            {/* Contact Card */}
            <div className="relative flex justify-center mb-48">
                <ContactCard />
            </div>

            {/* Footer */}
            <div className="relative">
                <Footer />
            </div>
        </section>
    );
};
