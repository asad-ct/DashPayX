'use client';

import React from "react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

export const HeroImage = () => {
    const { data: contentData } = useContent('hero');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    let imageSrc = '/image-36.png';
    if (contentData && 'content' in contentData && contentData.content.image) {
        imageSrc = contentData.content.image.startsWith('/api/')
            ? `${apiUrl.replace('/api', '')}${contentData.content.image}`
            : contentData.content.image;
    }

    console.log('HeroImage - imageSrc:', imageSrc);
    console.log('HeroImage - contentData:', contentData);

    return (
        <div className="w-full max-w-md lg:max-w-lg">
            <Image
                src={imageSrc || '/image-36.png'}
                alt="Crypto Mining Illustration"
                width={474}
                height={510}
                className="w-full h-auto object-cover"
                priority
                unoptimized
            />
        </div>
    );
};
