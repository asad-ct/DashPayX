"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FormData {
    name: string;
    phone: string;
    email: string;
}

export const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="w-full px-[150px]">
            <div className="space-y-4">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name:"
                    className="w-full h-[60px] px-4 rounded-xl border border-solid border-[#d9d9d9] [font-family:'Khula-Regular',Helvetica] font-normal text-[#555555] text-xl tracking-[0] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
                    required
                />

                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone No."
                    className="w-full h-[60px] px-4 rounded-xl border border-solid border-[#d9d9d9] [font-family:'Khula-Regular',Helvetica] font-normal text-[#555555] text-xl tracking-[0] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
                    required
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address:"
                    className="w-full h-[60px] px-4 rounded-xl border border-solid border-[#d9d9d9] [font-family:'Khula-Regular',Helvetica] font-normal text-[#555555] text-xl tracking-[0] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
                    required
                />

                <button
                    type="submit"
                    className="w-full h-[66px] bg-[#d71515] rounded-xl flex items-center justify-center border border-solid border-[#d9d9d9] hover:bg-[#c01313] transition-colors cursor-pointer"
                >
                    <span className="[font-family:'Khula-Bold',Helvetica] font-bold text-white text-2xl tracking-[0]">
                        GET STARTED
                    </span>
                </button>
            </div>
        </form>
    );
};
