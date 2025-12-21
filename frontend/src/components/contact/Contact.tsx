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
            <div className="relative text-center pt-6 md:pt-12 mb-8 md:mb-14 px-4">
                <h2 className="[font-family:'Khula-SemiBold',Helvetica] font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-center tracking-[0] leading-[40px] md:leading-[55px] mb-2 md:mb-4">
                    <span className="text-[#353535]">
                        Join the <span className="text-[#29838a]">DashPayX</span> (DPX) Community <br />
                    </span>
                </h2>
                <p className="max-w-[757px] mx-auto mt-2 md:mt-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-sm md:text-base lg:text-lg text-center tracking-[0] leading-[16px] md:leading-[12px]">
                    DashPayX will grow communit-first. Join our official channels to follow development updates,
                </p>
                <p className="max-w-[757px] mx-auto mt-2 md:mt-4 [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-sm md:text-base lg:text-lg text-center tracking-[0] leading-[20px] md:leading-[27px]">
                    exchange listings, staking updates, roadmap execution and real-world payment adoption.
                </p>
            </div>

            {/* QR Codes */}
            <div className="relative w-full flex flex-col items-center mb-12 md:mb-16 px-4">
                <div className="w-full overflow-x-auto md:overflow-visible">
                    <div className="flex justify-center gap-2 sm:gap-6 md:gap-12 pb-4 md:pb-0">
                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="w-[90px] sm:w-[110px] md:w-[150px] lg:w-[200px] h-[90px] sm:h-[120px] md:h-[150px] lg:h-[200px] bg-white rounded-lg p-2 mb-2 md:mb-4 border border-solid border-neutral-300 shadow-md">
                                <Image
                                    src="/qr1.png"
                                    alt="Telegram Community QR Code"
                                    width={196}
                                    height={196}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                Telegram Community
                            </p>
                        </div>

                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[90px] sm:h-[120px] md:h-[150px] lg:h-[200px] bg-white rounded-lg p-2 mb-2 md:mb-4 border border-solid border-neutral-300 shadow-md">
                                <Image
                                    src="/qr2.png"
                                    alt="Announcements Channel QR Code"
                                    width={196}
                                    height={196}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                Announcements Channel
                            </p>
                        </div>

                        <div className="flex flex-col items-center flex-shrink-0">
                            <div className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[200px] h-[90px] sm:h-[120px] md:h-[150px] lg:h-[200px] bg-white rounded-lg p-2 mb-2 md:mb-4 border border-solid border-neutral-300 shadow-md">
                                <Image
                                    src="/qr3.png"
                                    alt="X / Twitter QR Code"
                                    width={196}
                                    height={196}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-xs sm:text-sm md:text-base text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                X / Twitter
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Card */}
            <div className="relative flex justify-center mb-10 md:mb-15 px-4">
                <ContactCard />
            </div>

            {/* Footer */}
            <div className="relative">
                <Footer />
            </div>
        </section>
    );
};
