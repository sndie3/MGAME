"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "../../styles/variable.css";

import {
  LEFT_NAV,
  RIGHT_NAV,
  CENTER_NAV,
} from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full z-20">
      <nav className="relative h-15 flex items-center">

        {/* Center */}
        <Link
          href={CENTER_NAV.href}
          className="absolute left-1/2 -translate-x-1/2 z-20"
          style={{ top: "clamp(-45px, -6vw, -65px)" }}
        >
          <Image
            src={CENTER_NAV.icon}
            alt={CENTER_NAV.label}
            width={80}
            height={80}
            priority
            className={`w-[20vw] max-w-[80px] min-w-[40px] h-auto transition ${
              pathname === CENTER_NAV.href ? "scale-110" : ""
            }`}
          />
        </Link>

        {/* Left */}
        <div className="w-1/2 h-full flex justify-evenly items-center rounded-tr-lg bg-[var(--primary-color)]">
          {LEFT_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center text-white"
            >
              <Image src={item.icon} alt={item.label} width={28} height={28} />

              <span
                className={`text-xs font-bold ${
                  pathname === item.href
                    ? "text-[var(--secondary-color)]"
                    : ""
                }`}
              >
                {item.label}
              </span>

              {pathname === item.href && (
                <span className="absolute -top-2 w-2 h-2 rounded-full bg-[var(--secondary-color)]" />
              )}
            </Link>
          ))}
        </div>

        <div className="w-30" />

        {/* Right */}
        <div className="w-1/2 h-full flex justify-evenly items-center rounded-tl-lg bg-[var(--primary-color)]">
          {RIGHT_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center text-white"
            >
              <Image src={item.icon} alt={item.label} width={28} height={28} />

              <span
                className={`text-xs font-bold ${
                  pathname === item.href
                    ? "text-[var(--secondary-color)]"
                    : ""
                }`}
              >
                {item.label}
              </span>

              {pathname === item.href && (
                <span className="absolute -top-2 w-2 h-2 rounded-full bg-[var(--secondary-color)]" />
              )}
            </Link>
          ))}
        </div>

      </nav>
    </div>
  );
}