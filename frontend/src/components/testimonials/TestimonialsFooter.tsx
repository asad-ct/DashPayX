import React from "react";

interface TestimonialsFooterProps {
    footerText?: string;
}

export const TestimonialsFooter: React.FC<TestimonialsFooterProps> = ({ footerText }) => {
    if (!footerText) return null;

    return (
        <footer className="w-full flex justify-center py-8 px-4">
            <p className="max-w-[1051px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#515151] text-lg text-center tracking-[0] leading-8">
                {footerText}
            </p>
        </footer>
    );
};
