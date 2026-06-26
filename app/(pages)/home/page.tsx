// import Header from "./components/shared/Header";
// import Navbar from "./components/shared/Navbar";
// import Featured from "./components/features/featured/Featured";
// import ECasino from "./components/features/e-casino/ECasino";
// import Carousel from "./components/ui/Carousel";]
<<<<<<< HEAD
'use client'
import Header from "@/components/shared/Header";
import "@/styles/utilities.css"
import "@/styles/variable.css"
=======
"use client";
import Header from "@/components/shared/Header";
import "@/styles/utilities.css";
import "@/styles/variable.css";
>>>>>>> master
import Navbar from "@/components/shared/Navbar";
import Featured from "@/components/features/featured/Featured";
import ECasino from "@/components/features/e-casino/ECasino";
import Carousel from "@/components/ui/Carousel";
import Footer from "@/components/shared/Footer";
<<<<<<< HEAD


export default function Home() {

=======
import Image from "next/image";

export default function Home() {
>>>>>>> master
  return (
    <div>
      {/* Main Content */}
      <div className="pt-16 pb-20">
        {/* Carousel */}
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <Carousel />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-3">
          {/* Marquee */}
<<<<<<< HEAD
          <div className="overflow-hidden bg-[var(--primary-color)] py-2 rounded-md">
            <p className="whitespace-nowrap text-white font-bold animate-[marquee_20s_linear_infinite]">
              🎉 Hari Tari is now live with 342k play
            </p>
=======
          <div className="flex items-center overflow-hidden rounded-md bg-[var(--primary-color)] py-2 px-2">
            {/* Speaker Icon */}
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/assets/icons/speaker.png"
                alt="Speaker"
                fill
                className="object-contain"
              />
            </div>

            {/* Marquee */}
            <div className="ml-2 flex-1 overflow-hidden">
              <p className="inline-block whitespace-nowrap text-white font-bold animate-[marquee_20s_linear_infinite]">
                Hari Tari is now live with 342k play
              </p>
            </div>
>>>>>>> master
          </div>

          {/* Sections */}
          <Featured />
          <ECasino />
        </div>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
<<<<<<< HEAD
          <Footer/>
=======
          <Footer />
>>>>>>> master
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> master
