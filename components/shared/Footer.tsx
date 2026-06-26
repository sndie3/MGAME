import Image from "next/image";
import React from "react";

/**
 * 
 * 
 */
function Footer() {
    return (
        <footer className="pt-5 pb-5">
            <div>
                <p className="text-[var(--primary-color)] font-bold pt-3">Follow Us</p>
                <div className="flex">
                    <Image
                        src="/assets/icons/facebook.webp"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                    <Image
                        src="/assets/icons/instagram.webp"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                    <Image
                        src="/assets/icons/tiktok.webp"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                    <Image
                        src="/assets/icons/youtube.webp"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                    <Image
                        src="/assets/icons/x.jpg"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                </div>
            </div>
            <div>
                <p className="text-[var(--primary-color)] font-bold pt-3">Join Our Community</p>
                <div className="flex">
                    <Image
                        src="/assets/icons/telegram.webp"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                    <Image
                        src="/assets/icons/viber.webp"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-12"
                    />
                </div>
            </div>
            <div className="pt-8">
                <div className="flex justify-center flex-wrap gap-5">
                    <Image
                        src="/assets/icons/gcash.png"
                        alt="Facebook"
                        width={160}
                        height={25}
                        className="w-25"
                    />
                    <Image
                        src="/assets/icons/gotyme.png"
                        alt="Facebook"
                        width={160}
                        height={200}
                        className="w-25 h-10"
                    />
                     <Image
                        src="/assets/icons/visa.png"
                        alt="Facebook"
                        width={80}
                        height={60}
                        className="w-20"
                    />
                     <Image
                        src="/assets/icons/master.png"
                        alt="Facebook"
                        width={100}
                        height={100}
                        className="w-15"
                    />
                     <Image
                        src="/assets/icons/qrph.png"
                        alt="Facebook"
                        width={120}
                        height={120}
                        className="w-20"
                    />
                </div>
            </div>
            <div className="pt-10 flex flex-col place-items-center ">
                <div className="gap-2 flex justify-center ">
                     <Image
                        src="/assets/icons/Pagcor1.webp"
                        alt="Facebook"
                        width={120}
                        height={120}
                        className="w-15"
                    />
                     <Image
                        src="/assets/icons/Pagcor2.webp"
                        alt="Facebook"
                        width={250}
                        height={120}
                        className="w-35 h-15"
                    />
                </div>
                <p className="py-4 text-black text-[clamp(0.675rem,1vw,1rem)]">@2026 PINOY MGAMES ALL RIGHT RESERVED</p>
            </div>
        </footer>
    );
}

export default Footer;
