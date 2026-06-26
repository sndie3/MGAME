'use client'
import React from 'react'
import Featured1 from "@/public/assets/images/JDB017.png"
import Featured2 from "@/public/assets/images/JDB221.png"
import Featured3 from "@/public/assets/images/JDB035.png"
import Featured4 from "@/public/assets/images/JDB063.png"
import Featured5 from "@/public/assets/images/JDB064.png"
import Featured6 from "@/public/assets/images/JDB066.png"
import Featured7 from "@/public/assets/images/JDB069.png"
import Featured8 from "@/public/assets/images/JDB086.png"
import Featured9 from "@/public/assets/images/JDB088.png"
import Featured10 from "@/public/assets/images/JDB089.png"
import Featured11 from "@/public/assets/images/JDB135.png"
import Featured12 from "@/public/assets/images/JDB140.png"
import Featured13 from "@/public/assets/images/JDB144.png"
import Featured14 from "@/public/assets/images/JDB160.png"
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

function ECasino() {
    const route = useRouter();
  return (

    <div className="pt-16 pb-20">
        {/* Carousel */}
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center px-1 py-2 gap-2">
                <Button type="button" label="Back" onClick={() => route.replace('/home')} customClass="bg-[var(--secondary-color)] text-[var(--primary-color)] "/>
                <h1 className="text-[var(--secondary-color)] bg-[var(--primary-color)]  py-2 px-2 w-full  rounded-lg font-bold text-sm flex justify-center">
                    E-Casino
                </h1>
            </div>

            {/* Images */}
            <div className="px-1">
                <div className="
                    grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2
                ">
                    {[Featured1, Featured2, Featured3, Featured4, Featured5, Featured6, Featured7,Featured8,Featured9,Featured10,Featured11,Featured12,Featured13,Featured14].map(
                        (image, index) => (
                            <div
                                key={index}
                                className="
                        relative
                        aspect-[3/3] w-full
                        hover:scale-105 transition-all ease-in-out cursor-pointer
                    "
                            >
                                <Image
                                    src={image}
                                    alt={`Game ${index + 1}`}
                                    fill
                                    // sizes="(max-width: 768px) 150px, 200px"
                                    // loading="lazy"

                                    className="rounded-lg object-contain"
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    </div>

    )
}

export default ECasino