import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
    image: string;
    title: string;
    description: string;
    date: string;
    link: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
    image,
    title,
    description,
    date,
    link,
}) => {
    return (
        <article className="w-full sm:w-[320px] md:w-[380px] lg:w-[455px] h-auto md:h-[559px] bg-white rounded-xl overflow-hidden border border-solid border-[#dddddd] hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[225px]">
                <Image
                    src={image || '/news-default.png'}
                    alt={title}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="p-4 md:p-8">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <h3 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#292929] text-lg sm:text-xl md:text-2xl tracking-[0] leading-6 md:leading-8 mb-2 md:mb-4 hover:text-[#29838a] transition-colors">
                        {title}
                    </h3>
                </Link>

                <p className="[font-family:'Inter-Light',Helvetica] font-light text-[#3f3f3f] text-xs sm:text-sm md:text-lg tracking-[0] leading-[20px] md:leading-[25px] mb-4 md:mb-6">
                    {description}
                </p>
            </div>

            {/* Footer */}
            <div className="w-full h-auto md:h-14 border-t border-[#dddddd] flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 md:px-8 py-3 md:py-0 gap-3 sm:gap-0">
                <div className="flex items-center gap-2">
                    <div className="w-[20px] md:w-[26px] h-[20px] md:h-[26px] relative">
                        <Image
                            src="/calendar.png"
                            alt=""
                            width={26}
                            height={26}
                        />
                    </div>
                    <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#292929] text-xs md:text-sm tracking-[0]">
                        {date}
                    </span>
                </div>

                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 group"
                >
                    <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#29838a] text-xs md:text-sm tracking-[0]">
                        Read More
                    </span>
                    <Image
                        src="/arrow_right.png"
                        alt=""
                        width={24}
                        height={24}
                        className="group-hover:translate-x-1 transition-transform"
                    />
                </Link>
            </div>
        </article>
    );
};
