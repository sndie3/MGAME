// components/ui/WelcomeModal.tsx
"use client";

import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: Props) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-xl bg-[var(--primary-color)] p-6 shadow-xl relative text-xs px-11">
                <div className="relative w-35 sm:w-52 md:w-40 aspect-[5/2] mx-auto">
                    <Image
                        src="/assets/icons/pagcor.png"
                        alt="PAGCOR"
                        fill
                        className=" rounded-lg "
                    />
                </div>
                <p className="py-2">
                    The following personalities are <span className="text-[var(--secondary-color)]">NOT ALLOWED</span> to register
                    and/or play in this online gaming website:
                </p>
                <div className="py-2 flex flex-col gap-2">
                    <li>
                        Government Official or employee connected directly with the
                        operation of the Government or any of its agencies.
                    </li>
                    <li>
                        Member of the Armed Forces of the Philippines, including the Army,
                        Navy, Air Force, or the Philippine National Police.
                    </li>
                    <li>Persons under 21 years of age.</li>
                    <li>
                        Persons included in PAGCOR's National Database of Restricted Persons
                        (NDRP).
                    </li>
                    <li>Gaming Employment License (GEL) holder.</li>
                </div>
                <div>
                    <p>
                        Funds or credits in the account of player who is found ineligible to
                        play shall mean forfeiture of said funds/credits in favor of the
                        Government.
                    </p>
                </div>
                <p className="py-4">
                    Pinoy MGame{" "}
                    <span className="text-[var(--secondary-color)] font-bold">
                        Terms & Condition
                    </span>{" "}
                    and{" "}
                    <span className="text-[var(--secondary-color)] font-bold">
                        Privacy Policy.
                    </span>
                </p>
                <button
                    onClick={onClose}
                    className="mt-3 w-full rounded-lg bg-[var(--secondary-color)] py-3 text-[var(--primary-color)] font-semibold cursor-pointer"
                >
                    Accept
                </button>
                <button
                    onClick={onClose}
                    className=" w-full underline underline-offset-1 rounded-lg  py-3 font-semibold cursor-pointer"
                >
                    I Do Not Accept
                </button>
            </div>
        </div>
    );
}
