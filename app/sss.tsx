// import Header from "./components/shared/Header";
// import Navbar from "./components/shared/Navbar";
// import Featured from "./components/features/featured/Featured";
// import ECasino from "./components/features/e-casino/ECasino";
// import Carousel from "./components/ui/Carousel";]
'use client'
import Header from "@/components/shared/Header";
import "@/styles/utilities.css"
import "@/styles/variable.css"
import Navbar from "@/components/shared/Navbar";
import Featured from "@/components/features/featured/Featured";
import ECasino from "@/components/features/e-casino/ECasino";
import Carousel from "@/components/ui/Carousel";
import Footer from "@/components/shared/Footer";
import WelcomeModal from "@/components/ui/WelcomeModal";
import { useState,useEffect } from "react";

export default function Home() {
const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const seen = localStorage.getItem("welcome-modal");

  if (!seen) {
    setShowModal(true);
    localStorage.setItem("welcome-modal", "true");
  }
}, []);  
  return (
    <main className="bg-white min-h-screen">

      <WelcomeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>

      {/* Main Content */}
      <div className="pt-16 pb-20">
        {/* Carousel */}
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <Carousel />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 mt-3">
          {/* Marquee */}
          <div className="overflow-hidden bg-[var(--primary-color)] py-2 rounded-md">
            <p className="whitespace-nowrap text-white font-bold animate-[marquee_20s_linear_infinite]">
              🎉 Hari Tari is now live with 342k play
            </p>
          </div>

          {/* Sections */}
          <Featured />
          <ECasino />
        </div>
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-10">
          <Footer/>
        </div>
      </div>
      {/* Fixed Footer/Navbar */}
      <div className="fixed bottom-0 left-0 right-0 z-20">
        <Navbar />
      </div>
    </main>
  );
}