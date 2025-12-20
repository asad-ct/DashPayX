"use client";

import React, { useState } from "react";
import { FAQItem } from "./FAQItem";

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    const faqs: FAQ[] = [
        {
            id: 1,
            question: "What is DashPayX (DPX) in simple terms?",
            answer:
                "DPX is a BEP-20 token on the BNB Smart Chain focused on two things: fast, low-friction payments (starting with Pakistan & GCC) and a staking mechanism that rewards long-term holders with additional DPX over time.",
        },
        {
            id: 2,
            question: "On which blockchain does DPX live?",
            answer:
                "DPX is designed as a BEP-20 token on the BNB Smart Chain (BSC), chosen for its low fees, fast confirmation times and strong ecosystem of wallets and DeFi tools.",
        },
        {
            id: 3,
            question: "Is there a presale or private round?",
            answer:
                "The current vision is to avoid complicated presale structures and focus on transparent distribution and liquidity. Any future sale or allocation plan will be communicated clearly via the official DashPayX announcement channels.,",
        },
        {
            id: 4,
            question: "How will staking rewards work?",
            answer:
                "Staking is planned as an optional feature. Holders will be able to lock DPX into a smart contract and earn additional DPX, with reward parameters (rates, lock durations, caps) defined and published before launch. All details will be explained in simple guides.",
        },
        {
            id: 5,
            question: "Is this financial advice or a guarantee of returns?",
            answer:
                "No. Nothing about DashPayX is financial advice or a promise of profit. Crypto assets are highly volatile and involve risk. Always do your own research and only participate at a level you are comfortable with.",
        },
        {
            id: 6,
            question: "How can I stay updated on DashPayX progress?",
            answer:
                "The best way to stay updated is to follow the official DashPayX channels: Telegram community, Telegram announcement channel and X (Twitter). Key updates will also be reflected on this website over time.",
        },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-[20px] border-2 border-solid border-[#e7e7e7] shadow-[0px_4px_8px_8px_#9393931a,0px_4px_4px_#00000040] p-6 lg:p-8">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};
