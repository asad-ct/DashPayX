"use client";

import React, { useState } from "react";
import { FAQItem } from "./FAQItem";
import { Loader } from "../common/Loader";
import { useContent } from "@/hooks/useContent";

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

export const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);
    const { data: contentData, loading, error } = useContent('faq');

    if (loading) {
        return <Loader />;
    }

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading FAQ content</div>;
    }

    const faqs: FAQ[] = contentData.content.faqs?.map((faq: any, index: number) => ({
        id: index + 1,
        question: faq.question,
        answer: faq.answer,
    })) || [];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-[20px] border-2 border-solid border-[#e7e7e7] shadow-[0px_4px_8px_8px_#9393931a,0px_4px_4px_#00000040] p-4 md:p-6 lg:p-8">
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
