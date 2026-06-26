'use client'
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import WelcomeModal from "@/components/ui/WelcomeModal";
import { useLockBodyScroll } from "@/lib/ScrollLock";
import { useEffect, useState } from "react";

export default function PagesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem("welcome-modal");

        if (!seen) {
            setShowModal(true);
            localStorage.setItem("welcome-modal", "true");
        }
    }, []);

    useLockBodyScroll(showModal)
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
            {children}
            <div className="fixed bottom-0 left-0 right-0 z-20">
                <Navbar />
            </div>
        </main>
    );
}
