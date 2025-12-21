import React from "react";

interface TransparencyCard {
    id: number;
    title: string;
    description: string;
    status: string;
    icon: string | null;
    iconType: "image" | "circle";
    bgColor: string;
    textColor: string;
    borderColor: string;
    starIcon: string;
}

interface TestimonialsTransparencyCardProps {
    card: TransparencyCard;
    index: number;
}

export const TestimonialsTransparencyCard: React.FC<
    TestimonialsTransparencyCardProps
> = ({ card, index }) => {
    return (
        <article
            className={`w-full sm:w-[280px] md:w-[354px] h-auto md:h-[404px] ${card.bgColor} rounded-xl border-b-8 [border-bottom-style:solid] ${card.borderColor} overflow-hidden flex flex-col justify-between relative`}
        >
            {/* Icon */}
            {/* {card.iconType === "image" ? (
                <img
                    className="w-[70px] h-[70px] object-cover mx-auto mb-4"
                    alt=""
                    src={card.icon || ""}
                />
            ) : (
                <div className="w-[70px] h-[70px] bg-[#29838a] rounded-[35px] border-2 border-solid border-white mx-auto mb-4" />
            )} */}

            <div className="px-4 md:px-6 pt-4 md:pt-6">

                {/* Title */}
                <h3 className={`[font-family:'Inter-SemiBold',Helvetica] font-semibold ${card.textColor} text-lg md:text-[25px] tracking-[0] leading-[20px] md:leading-[25px] m-2 my-2 md:my-4`} >
                    {card.title}
                </h3>

                {/* Description */}
                <p className={`[font-family:'Inter-Regular',Helvetica] font-normal ${card.textColor} text-sm md:text-lg tracking-[0] leading-[20px] md:leading-[27px] m-2 mt-2 md:mt-4`} >
                    {card.description}
                </p>
            </div>


            {/* Star Icon */}
            <img
                className="w-12 md:w-18 h-12 md:h-18 ml-auto"
                alt=""
                src={card.starIcon}
                aria-hidden="true"
            />

            {/* Status */}
            <div className="flex gap-1 px-4 md:px-6 pb-4 md:pb-6 mx-2">
                <span className={`[font-family:'Inter-Regular',Helvetica] font-normal ${card.textColor} text-sm md:text-xl tracking-[0] leading-[20px] md:leading-[25px]`} >
                    Status:
                </span>
                <span className={`[font-family:'Inter-Regular',Helvetica] font-normal ${card.textColor} text-sm md:text-xl tracking-[0] leading-[20px] md:leading-[25px]`} >
                    {card.status}
                </span>
            </div>
        </article>
    );
};
