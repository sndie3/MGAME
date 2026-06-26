"use client";

import React from "react";
import { FaTimes, FaTools } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function Partial({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-sm rounded-2xl bg-[var(--primary-color)] p-8 text-center shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/80 hover:text-white transition"
        >
          <FaTimes size={18} />
        </button>

        {/* Icon */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
          <FaTools className="text-4xl text-yellow-400 animate-bounce" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white">
          Coming Soon
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm text-white/80 leading-relaxed">
          We're working hard to bring this feature to you.
          Stay tuned for future updates!
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-8 w-full rounded-lg bg-[var(--secondary-color)] py-3 font-semibold text-white transition hover:opacity-90"
        >
          Got it
        </button>
      </div>
    </div>
  );
}

export default Partial;