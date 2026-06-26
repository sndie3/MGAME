import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

interface InputProps {
  id: string;
  type: "email" | "number" | "tel" | "text" | "password";
  pattern?: string;
  placeholder?: string;
  maxLength?: number;
  customStyle?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  pattern,
  placeholder,
  maxLength,
  customStyle,
  onChange,
  children,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center border border-blue-300 rounded-lg bg-white px-4 py-3">
      {children}

      <div className="relative flex-1">
        <input
          id={id}
          type={
            type === "password"
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          pattern={pattern}
          placeholder={placeholder}
          maxLength={maxLength}
          className={`${customStyle} outline-none w-full ${
            type === "password" ? "pr-10" : ""
          }`}
          onChange={onChange}
        />

        {type === "password" && (
          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FaRegEyeSlash size={25}/> : <FaRegEye size={25}/>}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;