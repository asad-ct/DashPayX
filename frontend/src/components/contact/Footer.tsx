"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
    label: string;
    href: string;
}

const navigationLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "Token", href: "#token" },
    { label: "Feature", href: "#feature" },
    { label: "Services", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" },
];

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative">
            {/* Social Media Icons */}
            <div className="flex justify-center mb-6 md:mb-12">
                <Image
                    src="/socials.png"
                    alt="Social media links"
                    width={234}
                    height={45}
                    className="w-[150px] md:w-auto h-auto"
                />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-4 md:gap-10 mb-6 md:mb-8 px-4" aria-label="Footer navigation">
                <ul className="flex flex-wrap gap-3 md:gap-10 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-xs sm:text-sm md:text-lg text-center tracking-[0] justify-center">
                    {navigationLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href} className="hover:underline transition-all">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>


            {/* Bottom Bar */}
            <div className="w-full h-auto bg-[#2c6579] flex items-center justify-center py-4 md:py-0 md:h-[100px]">
                <div className="w-full max-w-[1440px] flex flex-row items-center justify-between px-4 gap-4">
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs sm:text-sm md:text-lg tracking-[0] text-center flex-1">
                        Copyright © 2026 DashPayX.&nbsp;&nbsp;All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-[45px] md:w-[55px] h-[45px] md:h-[53px] bg-[#139ad6] rounded-[5px] hover:bg-[#1186bd] transition-colors cursor-pointer flex items-center justify-center flex-shrink-0"
                        aria-label="Scroll to top"
                    >
                        <Image
                            src="/north.png"
                            alt=""
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </div>
        </footer>
    );
};
