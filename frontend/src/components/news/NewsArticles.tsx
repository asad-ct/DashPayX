"use client";

import React from "react";
import { NewsCard } from "./NewsCard";
import { NewsDecorations } from "./NewsDecorations";
import { useContent } from "@/hooks/useContent";

interface Article {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
}

export const NewsArticles = () => {
    const { data: contentData, error } = useContent('news');
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

    if (error || !contentData || !('content' in contentData)) {
        return <div className="text-center py-12">Error loading news content</div>;
    }

    const articles: Article[] = contentData.content.articles?.map((article: any, index: number) => {
        let imageSrc = article.image || '/news-default.png';
        if (imageSrc.startsWith('/api/')) {
            imageSrc = `${apiUrl.replace('/api', '')}${imageSrc}`;
        }
        return {
            id: index + 1,
            image: imageSrc,
            title: article.title,
            description: article.description,
            date: article.date,
            link: article.link,
        };
    }) || [];

    return (
        <section className="relative w-full min-h-auto md:min-h-[965px] overflow-hidden">
            <NewsDecorations />

            <div className="relative w-full max-w-[1440px] mx-auto pb-4 md:pb-8 px-4">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <p className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#29838a] text-sm md:text-lg lg:text-xl tracking-[0] mb-2 md:mb-3">
                        NEWS &amp; ARTICLES
                    </p>
                    <h2 className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#353535] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[0] mb-4 md:mb-6">
                        {contentData.content.title}
                    </h2>
                    <p className="w-full max-w-[828px] mx-auto [font-family:'Roboto-Light',Helvetica] font-light text-[#5c5c5c] text-sm sm:text-base md:text-lg lg:text-xl text-center tracking-[0] leading-[24px] md:leading-[35px]">
                        {contentData.content.subtitle}
                    </p>
                </div>

                {/* News cards grid */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 md:mb-12">
                    {articles.map((article) => (
                        <NewsCard
                            key={article.id}
                            image={article.image}
                            title={article.title}
                            description={article.description}
                            date={article.date}
                            link={article.link}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="flex justify-center">
                    <button 
                        onClick={() => {
                            const url = contentData.content.buttonUrl;
                            if (url) {
                                if (url.startsWith('http://') || url.startsWith('https://')) {
                                    window.open(url, '_blank', 'noopener,noreferrer');
                                } else {
                                    window.open(`https://${url}`, '_blank', 'noopener,noreferrer');
                                }
                            }
                        }}
                        className="w-[140px] md:w-[180px] h-[40px] md:h-[50px] bg-[#29838a] rounded-lg overflow-hidden flex items-center justify-center hover:bg-[#237a81] transition-colors cursor-pointer"
                    >
                        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs md:text-sm lg:text-base tracking-[0] leading-[normal]">
                            {contentData.content.buttonText || 'View All Articles'}
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};
