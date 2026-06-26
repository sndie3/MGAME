"use client";
import Input from "@/components/ui/Input";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaTimes } from "react-icons/fa";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onRegister: () => void;
}
function Login({ isOpen, onClose, onRegister }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [number, setNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-3/4 bg-[#f8eeee] rounded-2xl shadow-lg p-8 text-black"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <FaTimes size={22} />
        </button>

        <h1 className="text-2xl font-bold text-blue-600 text-center">
          Log in to your account
        </h1>

        <p className="text-center text-gray-700 mt-2">
          Don't have an account?{" "}
          <button
            className="text-[var(--secondary-color)] font-semibold"
            onClick={onRegister}
          >
            Register
          </button>
        </p>

        <form className="mt-8 space-y-5">
          {/* Phone */}
          <div>
            <label className="block text-md font-medium px-1">
              Phone Number:
            </label>
            <Input
              children={
                <>
                  <Image
                    src="/assets/icons/ph.png"
                    alt="PH"
                    width={150}
                    height={150}
                    className="w-6 "
                  />
                  <span className="px-2">+63 |</span>
                </>
              }
              id="number"
              type="tel"
              pattern="^9[0-9]{9}$"
              placeholder="9123456789"
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setNumber(value);
              }}
            />
          </div>

          <div>
            <label className="block text-md font-medium px-1">Password:</label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-[var(--primary-color)]"
              />
              <span className="text-sm text-gray-700">Remember me</span>
            </label>

            <button
              type="button"
              className="text-sm text-black hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--primary-color)] text-[var(--secondary-color)] font-bold text-xl py-3 rounded-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
