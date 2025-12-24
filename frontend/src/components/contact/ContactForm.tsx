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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
            const response = await fetch(`${apiUrl}/contact/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setSubmitMessage("✓ Thank you! Your message has been sent successfully.");
            setFormData({
                name: "",
                phone: "",
                email: "",
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitMessage("✗ Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitMessage(""), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full px-6 sm:px-8 md:px-[150px] pb-6 md:pb-4">
            <div className="space-y-3 md:space-y-4">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name:"
                    className="w-full h-[45px] md:h-[60px] px-4 rounded-xl border border-solid border-[#d9d9d9] [font-family:'Khula-Regular',Helvetica] font-normal text-[#555555] text-sm md:text-xl tracking-[0] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
                    required
                />

                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone No."
                    className="w-full h-[45px] md:h-[60px] px-4 rounded-xl border border-solid border-[#d9d9d9] [font-family:'Khula-Regular',Helvetica] font-normal text-[#555555] text-sm md:text-xl tracking-[0] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
                    required
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address:"
                    className="w-full h-[45px] md:h-[60px] px-4 rounded-xl border border-solid border-[#d9d9d9] [font-family:'Khula-Regular',Helvetica] font-normal text-[#555555] text-sm md:text-xl tracking-[0] placeholder:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#4fc3f7]"
                    required
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[48px] md:h-[66px] bg-[#d71515] rounded-xl flex items-center justify-center border border-solid border-[#d9d9d9] hover:bg-[#c01313] transition-colors cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    <span className="[font-family:'Khula-Bold',Helvetica] font-bold text-white text-lg md:text-2xl tracking-[0]">
                        {isSubmitting ? "SENDING..." : "GET STARTED"}
                    </span>
                </button>

                {submitMessage && (
                    <div className={`text-center py-2 px-4 rounded-lg ${submitMessage.startsWith('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {submitMessage}
                    </div>
                )}
            </div>
        </form>
    );
};
