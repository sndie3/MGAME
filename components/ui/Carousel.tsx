'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import banner1 from '@/public/assets/images/banner1.jpg';
import banner2 from '@/public/assets/images/banner2.jpg';
import banner3 from '@/public/assets/images/banner3.jpg';
import banner4 from '@/public/assets/images/banner4.jpg';

function Carousel() {
    const items = [
        { id: 1, image: banner1 },
        { id: 2, image: banner2 },
        { id: 3, image: banner3 },
        { id: 4, image: banner4 },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="
                relative
                w-full
                h-[180px]
                sm:h-[220px]
                md:h-[280px]
                lg:h-[320px]
                overflow-hidden
                rounded-lg
                px-1
                py-2
            "
        >
            <div className="relative w-full h-full">
                {items.map((item, index) => (
                    <Image
                        key={item.id}
                        src={item.image}
                        alt={`Slide ${index + 1}`}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                        className={`w-full h-full contain transition-all duration-500 ${
                            current === index
                                ? 'opacity-100'
                                : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 rounded-full transition-all ${
                            current === index
                                ? 'w-6 bg-white'
                                : 'w-2 bg-white/50'
                        }`}
                    />
                ))}
            </div>

            {/* Previous */}
            {/* <button
                onClick={() =>
                    setCurrent(
                        (prev) => (prev - 1 + items.length) % items.length
                    )
                }
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white hover:bg-black/50"
            >
                ❮
            </button> */}

            {/* Next
            <button
                onClick={() =>
                    setCurrent((prev) => (prev + 1) % items.length)
                }
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white hover:bg-black/50"
            >
                ❯
            </button> */}
        </div>
    );
}

export default Carousel;