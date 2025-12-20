import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
    quote: string;
    name: string;
    location: string;
    avatar: string;
    starIcon: string;
    ratingImage: string;
    isActive?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    name,
    location,
    avatar,
    starIcon,
    ratingImage,
    isActive = false,
}) => {
    const bgColor = isActive ? "bg-[#29838a]" : "bg-[#f9f9f9]";
    const textColor = isActive ? "text-white" : "text-[#515151]";
    const nameColor = isActive ? "text-white" : "text-black";

    return (
        <div
            className={`w-[466px] h-[359px] ${bgColor} rounded-xl border-b-8 border-[#4fc3f7] overflow-hidden transition-all hover:shadow-xl`}
        >
            <div className="relative p-10">
                {/* Quote mark */}
                <div className="absolute top-[258px] right-[33px] w-[92px] h-[92px] rotate-[-180deg] opacity-20">
                    <Image src="/quote-mark.svg" alt="" width={92} height={69} />
                </div>

                {/* Quote text */}
                <p
                    className={`w-[357px] mx-auto ${textColor} text-lg text-center [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[27px] mb-16`}
                >
                    {quote}
                </p>

                {/* Star rating */}
                <div className="flex justify-center mb-6">
                    <Image src={ratingImage} alt="5 star rating" width={174} height={28} />
                </div>

                {/* User info */}
                <div className="flex items-center gap-4">
                    <div className="relative w-[75px] h-[69px]">
                        <Image
                            src={starIcon}
                            alt=""
                            width={75}
                            height={69}
                            className="absolute top-0 left-0"
                        />
                        <Image
                            src={avatar}
                            alt={name}
                            width={70}
                            height={70}
                            className="absolute top-0 left-[5px] rounded-full object-cover"
                        />
                    </div>

                    <div>
                        <div
                            className={`${nameColor} text-xl [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] leading-[25px]`}
                        >
                            {name}
                        </div>
                        <div
                            className={`${nameColor} text-lg [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[25px]`}
                        >
                            {location}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
