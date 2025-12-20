"use client";

import React from "react";

const navItems = [
    { label: "Home", href: "#home", active: true },
    { label: "About", href: "#about", active: false },
    { label: "Tokenomics", href: "#tokenomics", active: false },
    { label: "Roadmap", href: "#roadmap", active: false },
    { label: "Staking", href: "#staking", active: false },
    { label: "FAQ", href: "#faq", active: false },
    { label: "Contact Us", href: "#contact", active: false },
];

const handleScroll = (href: string) => {
    if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
};

export const NavLinks = () => {
    return (
        <nav className="flex items-center gap-6 [font-family:'Amiko-Regular',Helvetica] font-normal text-lg text-center tracking-[0] leading-[35px]">
            {navItems.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleScroll(item.href)}
                    className={`whitespace-nowrap transition-colors hover:text-[#4fc3f7] cursor-pointer bg-none border-none ${item.active ? "text-[#4fc3f7]" : "text-[#1d1d1d]"
                        }`}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
};
