"use client";

import React, { useState } from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { JoinButton } from "./JoinButton";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full h-15 md:h-20 md:h-22 bg-white border border-solid border-transparent">
            <div className="relative w-full md:w-[85%] h-full mx-auto flex justify-between md:justify-start items-center gap-4 md:gap-0 p-4 md:p-0">
                <div className="flex items-center gap-3">
                    <Logo />
                    <div className="hidden md:block [font-family:'Amiko-Bold',Helvetica] font-bold text-[#2a7595] text-[32px] text-center tracking-[-0.96px] leading-[35px] whitespace-nowrap">
                        DashPayX
                    </div>
                </div>

                <div className="hidden md:flex md:justify-center md:items-center md:gap-8 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <NavLinks />
                </div>

                <div className="hidden md:block md:absolute md:top-3 md:right-0">
                    <JoinButton />
                </div>

                <div className="flex md:hidden gap-2 items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-[#1d1d1d]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <JoinButton />
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#d9d9d9] shadow-lg z-50">
                    <NavLinks isMobile={true} />
                </div>
            )}
        </header>
    );
};
