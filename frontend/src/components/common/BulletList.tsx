import React from "react";
import Image from "next/image";

interface BulletListProps {
    items: string[];
}

export const BulletList: React.FC<BulletListProps> = ({ items }) => {
    return (
        <div className="flex flex-col gap-1">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                    <div className="w-[25px] h-[25px] flex-shrink-0 mt-2">
                        <Image
                            src="/checkmark-icon.png"
                            alt=""
                            width={25}
                            height={25}
                            className="object-contain"
                        />
                    </div>
                    <span className="[font-family:'Khula-SemiBold',Helvetica] font-semibold text-[#1e1e1e] text-xl tracking-[0] leading-[42px]">
                        {item}
                    </span>
                </div>
            ))}
        </div>
    );
};
