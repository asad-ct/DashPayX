'use client';

import React from "react";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";

export const SecondBannerImage = () => {
    const { data: contentData, loading } = useContent('secondbanner');
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
        <div className="w-full max-w-[629px] h-[280px] sm:h-[350px] md:h-[563px]">
            <Image
                src={imageSrc}
                alt="Crypto trading platform illustration"
                width={629}
                height={563}
                className="object-contain w-full h-full"
                unoptimized
            />
        </div>
    );
};
