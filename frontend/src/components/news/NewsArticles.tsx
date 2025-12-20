import React from "react";
import { NewsCard } from "./NewsCard";
import { NewsDecorations } from "./NewsDecorations";

interface Article {
    id: number;
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
}

export const NewsArticles = () => {
    const articles: Article[] = [
        {
            id: 1,
            image: "/news-1.png",
            title: "Bitcoin price today: ticks down below $90k amid risk-off mood; key US data awaited",
            description:
                "Tatsuzo Tomita, Nissan's new chief for total delivered cost transformation, is spearhea-ding the embattled Japanese company's",
            date: "19 November 2025",
            link: "https://www.investing.com/news/cryptocurrency-news/bitcoin-price-today-ticks-down-below-90k-amid-riskoff-mood-key-us-data-awaited-4407239",
        },
        {
            id: 2,
            image: "/news-2.png",
            title: "EV registrations jump 27% in July for legacy brands as U.S. tax credit nears end; Tesla slips",
            description:
                "Chevrolet, Honda and VW surged while Tesla and Rivian lost ground. EV market share in the U.S. rose to 8.9 percent, according to",
            date: "19 November 2025",
            link: "https://www.investing.com/news/cryptocurrency-news/bitcoin-price-today-ticks-down-below-90k-amid-riskoff-mood-key-us-data-awaited-4407239",
        },
        {
            id: 3,
            image: "/news-3.png",
            title: "The Interactive Brokers now allows to fund the accounts with stablecoins",
            description:
                "Along with blistering performance, The Lamborghinis are known for wild styling. From the chunky wheel arches and towering wing",
            date: "19 November 2025",
            link: "https://www.investing.com/news/cryptocurrency-news/bitcoin-price-today-ticks-down-below-90k-amid-riskoff-mood-key-us-data-awaited-4407239",
        },
    ];

    return (
        <section className="relative w-full h-[965px] overflow-hidden">
            <NewsDecorations />

            <div className="relative w-full max-w-[1440px] mx-auto pb-8 px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#29838a] text-xl tracking-[0] mb-3">
                        NEWS &amp; ARTICLES
                    </p>
                    <h2 className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#353535] text-[40px] tracking-[0] mb-6">
                        Latest News of CryptoCurrency
                    </h2>
                    <p className="w-full max-w-[828px] mx-auto [font-family:'Roboto-Light',Helvetica] font-light text-[#5c5c5c] text-xl text-center tracking-[0] leading-[35px]">
                        Stay updated with the latest insights, market trends, and expert analysis from the world of cryptocurrency.
                    </p>
                </div>

                {/* News cards grid */}
                <div className="flex justify-center gap-8 mb-12">
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
                    <button className="w-[180px] h-[50px] bg-[#29838a] rounded-lg overflow-hidden flex items-center justify-center hover:bg-[#237a81] transition-colors">
                        <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                            View All Articles
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};
