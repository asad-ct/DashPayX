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
        <article className="w-[455px] h-[559px] bg-white rounded-xl overflow-hidden border border-solid border-[#dddddd] hover:shadow-lg transition-shadow">
            {/* Image */}
            <div className="relative w-full h-[225px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-8">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <h3 className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#292929] text-2xl tracking-[0] leading-8 mb-4 hover:text-[#29838a] transition-colors">
                        {title}
                    </h3>
                </Link>

                <p className="[font-family:'Inter-Light',Helvetica] font-light text-[#3f3f3f] text-lg tracking-[0] leading-[25px] mb-6">
                    {description}
                </p>
            </div>

            {/* Footer */}
            <div className="w-full h-14 border-t border-[#dddddd] flex items-center justify-between px-8">
                <div className="flex items-center gap-2">
                    <div className="w-[26px] h-[26px] relative">
                        <Image
                            src="/calendar.png"
                            alt=""
                            width={26}
                            height={26}
                        />
                    </div>
                    <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#292929] text-sm tracking-[0]">
                        {date}
                    </span>
                </div>

                <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 group"
                >
                    <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#29838a] text-sm tracking-[0]">
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
