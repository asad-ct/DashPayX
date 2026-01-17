'use client';

import React from "react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

export const HeroImage = () => {
    const { data: contentData, loading } = useContent('hero');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    let imageSrc = '';
    if (contentData && 'content' in contentData && contentData.content.image) {
        imageSrc = contentData.content.image.startsWith('/api/')
            ? `${apiUrl.replace('/api', '')}${contentData.content.image}`
            : contentData.content.image;
    }

    if(loading) {
        return (<div></div>);
    }

    return (
        <div className="w-full h-full">
            <Image
                src={imageSrc}
                alt="Crypto Mining Illustration"
                width={574}
                height={510}
                className="w-full h-full object-cover"
                priority
                unoptimized
            />
        </div>
    );
};
