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
            <div className="flex justify-center mb-12">
                <Image
                    src="/socials.png"
                    alt="Social media links"
                    width={234}
                    height={45}
                />
            </div>

            {/* Navigation */}
            <nav className="flex justify-center mb-8" aria-label="Footer navigation">
                <ul className="flex gap-10 [font-family:'Inter-Medium',Helvetica] font-medium text-white text-lg text-center tracking-[0]">
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
            <div className="w-full h-[100px] bg-[#2c6579] flex items-center justify-center">
                <div className="w-full max-w-[1440px] flex items-center justify-between px-4">
                    <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-lg tracking-[0]">
                        Copyright © 2026 DashPayX.&nbsp;&nbsp;All Rights Reserved.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="w-[55px] h-[53px] bg-[#139ad6] rounded-[5px] hover:bg-[#1186bd] transition-colors cursor-pointer flex items-center justify-center"
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
