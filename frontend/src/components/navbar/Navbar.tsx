import React from "react";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { JoinButton } from "./JoinButton";

export const Navbar = () => {
    return (
        <header className="relative w-full h-20 bg-white border border-solid border-transparent">
            <div className="relative w-[85%] h-full mx-auto flex justify-center items-center">
                <div className="absolute top-[calc(50.00%_-_35px)] left-[5px]">
                    <Logo />
                </div>

                <div className="absolute top-[calc(50.00%_-_17px)] left-20 [font-family:'Amiko-Bold',Helvetica] font-bold text-[#2a7595] text-[32px] text-center tracking-[-0.96px] leading-[35px] whitespace-nowrap">
                    DashPayX
                </div>

                <div className="absolute top-[calc(50.00%_-_17px)] left-1/2 -translate-x-1/2">
                    <NavLinks />
                </div>

                <div className="absolute top-3 right-0">
                    <JoinButton />
                </div>
            </div>
        </header>
    );
};
