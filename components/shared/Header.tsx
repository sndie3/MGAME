'use client'

import React, { useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import logo from "@/public/assets/images/header.webp"
import Register from "../features/auth/register/Register";
import "../../styles/variable.css";
import Login from "../features/auth/login/Login";
import { useLockBodyScroll } from "@/lib/ScrollLock";


/**
 * Header Component
 *
 * Displays the application's header containing:
 * - MGame Logo
 * - Login button
 * - Sign Up button
 *
 * It also controls the visibility of the Login and Register
 * modal components and allows switching between them.
 *
 * @component
 * @returns {JSX.Element} Header with authentication modals.
 */
function Header() {
    
    //Controls the visibility of Modals
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useLockBodyScroll(showRegister)
    useLockBodyScroll(showLogin)
    return (
        <>
            <div className="flex w-full h-16 items-center justify-between px-3 bg-white">
                <div>
                    <Image
                        src={logo}
                        alt="Logo"
                        width={120}
                        height={52}
                    />
                </div>

                <div className="flex gap-2">
                    <Button
                        type="button"
                        customClass="bg-[var(--primary-color)] text-[var(--secondary-color)]"
                        label="Login"
                        onClick={() => setShowLogin(true)}
                    />

                    <Button
                        type="button"
                        customClass="bg-[var(--secondary-color)] text-[var(--primary-color)]"
                        label="Sign Up"
                        onClick={() => setShowRegister(true)}
                    />
                </div>
            </div>

            <Register
                isOpen={showRegister}
                onClose={() => setShowRegister(false)}
                onLogin={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                }}
            />

            <Login
                isOpen={showLogin}
                onClose={() => setShowLogin(false)}
                onRegister={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                }}
            />
        </>
    );
}

export default Header;