'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Featured1 from "@/public/assets/images/JDB017.png";
import Featured2 from "@/public/assets/images/JDB221.png";
import Featured3 from "@/public/assets/images/JDB035.png";
import Featured4 from "@/public/assets/images/JDB063.png";
import Featured5 from "@/public/assets/images/JDB064.png";
import Featured6 from "@/public/assets/images/JDB066.png";
import Featured7 from "@/public/assets/images/JDB069.png";
import Featured8 from "@/public/assets/images/JDB086.png";
import { useRouter } from "next/navigation";
import "@/styles/utilities.css";
import Partial from "@/components/ui/PartialModal";

function ECasino() {
  const route = useRouter();
const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  return (
    <div className="pt-1">
      {/* Header */}
      <div className="flex justify-between items-center px-1 py-2">
        <h1 className="text-lg font-bold text-blue-600">E-Casino</h1>
        <button
          onClick={() => route.replace("/e-casino")}
          className="text-[var(--secondary-color)] font-bold text-sm hover:text-[var(--primary-color)] transition 3s ease-in cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Images */}
      <div className="px-1">
        <div
          onClick={() => setIsComingSoonOpen(true)}
          className="
    grid
    grid-rows-2
    grid-flow-col
    auto-cols-[120px]
sm:auto-cols-[140px]
md:auto-cols-auto
 gap-2
    overflow-x-auto
    scrollbar-hide

    md:grid-rows-1
    md:grid-flow-row
    md:grid-cols-8
    md:auto-cols-auto
    md:overflow-visible
  "
        >
          {[
            Featured1,
            Featured2,
            Featured3,
            Featured4,
            Featured5,
            Featured6,
            Featured7,
            Featured8,
          ].map((image, index) => (
            <div
              key={index}
              className="
        relative
        w-full
        aspect-[3/3]
        cursor-pointer
        group
        overflow-hidden
      "
            >
              <Image
                src={image}
                alt={`Game ${index + 1}`}
                fill
                className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105 "
              />
<div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-10 animate-shine" />            </div>
          ))}
        </div>
      </div>
      <Partial
  isOpen={isComingSoonOpen}
  onClose={() => setIsComingSoonOpen(false)}
/>
    </div>
  );
}

export default ECasino;
