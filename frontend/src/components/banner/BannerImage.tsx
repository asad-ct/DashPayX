'use client';

import React from "react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

export const BannerImage = () => {
    const { data: contentData } = useContent('banner');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    let imageSrc = '/banner1-image2.svg';
    if (contentData && 'content' in contentData && contentData.content.image) {
        imageSrc = contentData.content.image.startsWith('/api/')
            ? `${apiUrl.replace('/api', '')}${contentData.content.image}`
            : contentData.content.image;
    }

    console.log('BannerImage - imageSrc:', imageSrc);
    console.log('BannerImage - contentData:', contentData);

    return (
        <div className="relative w-[658px] h-[478px]">
            <div className="absolute top-[9px] left-9 w-[592px] h-[459px]">
                <Image
                    src={imageSrc || '/banner1-image2.svg'}
                    alt=""
                    width={592}
                    height={459}
                    className="object-contain"
                    unoptimized
                />
            </div>
            <div className="absolute top-[19px] left-11 w-[592px] h-[459px]">
                <Image
                    src={imageSrc || '/banner1-image2.svg'}
                    alt="Platform illustration"
                    width={592}
                    height={459}
                    className="object-cover"
                    unoptimized
                />
            </div>
        </div>
    );
};
