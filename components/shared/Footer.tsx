import Image from "next/image";
import React from "react";

/**
 *
 *
 */
function Footer() {
    return (
        <footer className="pt-5 pb-5 px-2">
            <div>
                <p className="text-[var(--primary-color)] font-bold pt-3">Follow Us</p>
                <div className="flex gap-2">
                    <Image
                        src="/assets/icons/facebook.png"
                        alt="Facebook"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/assets/icons/instagram.png"
                        alt="Instagram"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/assets/icons/tiktok.png"
                        alt="Tiktok"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/assets/icons/youtube.png"
                        alt="Youtube"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/assets/icons/x.png"
                        alt="X/Twitter"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>
            </div>
            <div>
                <p className="text-[var(--primary-color)] font-bold pt-3">
                    Join Our Community
                </p>
                <div className="flex place-items-center align-center gap-2">
                    <Image
                        src="/assets/icons/telegram.png"
                        alt="Telegram"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/assets/icons/viber.png"
                        alt="Viber"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                    <Image
                        src="/assets/icons/discord.png"
                        alt="Viber"
                        width={42}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>
            </div>
            <div className="pt-8">
                <div className="flex justify-center flex-wrap gap-5">
                    <div className="relative w-24 aspect-[3/1]">
                        <Image
                            src="/assets/icons/gcash.png"
                            alt="GCash"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-24 aspect-[3/1]">
                        <Image
                            src="/assets/icons/gotyme.png"
                            alt="GoTyme"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-24 aspect-[3/1]">
                        <Image
                            src="/assets/icons/visa.png"
                            alt="Visa"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-24 aspect-[3/1]">
                        <Image
                            src="/assets/icons/master.png"
                            alt="Master"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-24 aspect-[3/1]">
                        <Image
                            src="/assets/icons/qrph.png"
                            alt="QRPh"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="pt-10 flex flex-col place-items-center ">
                <div className="gap-2 flex justify-center ">
                   <div className="relative w-24 aspect-[3/1]">
                        <Image
                            src="/assets/icons/Pagcor1.webp"
                            alt="Pagcor"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-42 aspect-[3/1]">
                        <Image
                            src="/assets/icons/Pagcor2.webp"
                            alt="Pagcor1"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <p className="py-4 text-black text-[clamp(0.675rem,1vw,1rem)]">
                    @2026 PINOY MGAMES ALL RIGHT RESERVED
                </p>
            </div>
        </footer>
    );
}

export default Footer;
