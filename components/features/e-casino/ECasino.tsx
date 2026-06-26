import React from 'react'
import Image from "next/image";
import Featured1 from "@/public/assets/images/JDB017.png"
import Featured2 from "@/public/assets/images/JDB221.png"
import Featured3 from "@/public/assets/images/JDB035.png"
import Featured4 from "@/public/assets/images/JDB063.png"
import Featured5 from "@/public/assets/images/JDB064.png"
import Featured6 from "@/public/assets/images/JDB066.png"
import Featured7 from "@/public/assets/images/JDB069.png"
import { useRouter } from 'next/navigation';


function ECasino() {
          const route = useRouter();

    return (
        <div className="pt-1">
            {/* Header */}
            <div className="flex justify-between items-center px-1 py-2">
                <h1 className="text-lg font-bold text-blue-600">
                    E-Casino
                </h1>
                <button onClick={() => route.replace('/e-casino')} className="text-[var(--secondary-color)] font-bold text-sm hover:text-[var(--primary-color)] transition 3s ease-in cursor-pointer">
                    View All
                </button>
            </div>

            {/* Images */}
            <div className="px-1">
                <div className="
                    flex md:grid
                    gap-2
                    md:grid-cols-7
                    overflow-x-auto md:overflow-visible
                    scrollbar-hide
                ">
                    {[Featured1, Featured2, Featured3, Featured4, Featured5, Featured6, Featured7].map(
                        (image, index) => (
                            <div
                                key={index}
                                className="
                        relative
                        min-w-[150px] md:min-w-0
                        h-[160px]
                        flex-shrink-0
                        hover:scale-105 transition-all ease-in-out  cursor-pointer
                    "
                            >
                                <Image
                                    src={image}
                                    alt={`Game ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 150px, 200px"
                                    loading="lazy"

                                    className="rounded-lg object-contain"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ECasino