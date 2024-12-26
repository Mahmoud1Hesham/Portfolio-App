import { featuredData } from "@/app/data";
import FeaturedCard from "../cards/featured/featured-card";
import { cn } from "@/libs/utilites";
import { useState } from "react";

export default function ExpandableFeatured() {
    const [hoveredIndex, setHoverIndex] = useState<number | null>(null)
    const handleMouseEnter = (index: number) => {
        setHoverIndex(index);
    }
    const handleMouseLeave = () => {
        setHoverIndex(null);
    }
    return <>
        <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
            {
                featuredData.slice(1).map((featured, i) => (
                    <div key={i} className={cn('relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out',
                        i === hoveredIndex ? 'lg:w-[40%]' : 'lg:w-[33%]'
                    )}
                        onMouseEnter={() => handleMouseEnter(i)}
                        onMouseLeave={() => handleMouseLeave()}
                    >
                        <FeaturedCard
                            active={i === hoveredIndex}
                            title={featured.title}
                            tag={featured.tag}
                            video={featured.video}
                        />
                    </div>
                ))
            }
        </div>
    </>
}
