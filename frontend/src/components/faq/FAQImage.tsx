'use client';

import React from "react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

export const FAQImage = () => {
    const { data: contentData } = useContent('faq');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    let imageSrc = '';
    if (contentData && 'content' in contentData && contentData.content.image) {
        imageSrc = contentData.content.image.startsWith('/api/')
            ? `${apiUrl.replace('/api', '')}${contentData.content.image}`
            : contentData.content.image;
    }

    console.log('FAQImage - imageSrc:', imageSrc);
    console.log('FAQImage - contentData:', contentData);

    return (
        <div className="w-full sm:w-full md:w-[350px] lg:w-[700px] h-[280px] sm:h-[320px] md:h-[450px] lg:h-[850px] bg-white rounded-3xl border border-solid border-neutral-300 shadow-lg overflow-hidden">
            <Image
                src={imageSrc}
                alt="FAQ illustration"
                width={784}
                height={884}
                className="w-full h-full object-cover"
                unoptimized
            />
        </div>
    );
};
