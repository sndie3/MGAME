'use client';

/**
 * Button Component Props
 * 
 */
interface ButtonProps {
    type: "button" | "submit" | "reset";
    customClass : string;
    label: string;
    onClick?: () => void;
    active?: boolean;
    loading?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, customClass, label, onClick, active, loading, disabled }) => {
    return(
        <button
            type={type}
            className={customClass+ ' px-4 py-1.5 text-xs md:text-sm lg:text-base rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button;