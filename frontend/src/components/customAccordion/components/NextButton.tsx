import type { NextButtonProps } from "../types";

export default function NextButton({
  label,
  onClick,
  className = "",
  disabled = false,
}: NextButtonProps) {
  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`
          rounded-[7px]
          border
          border-[#4E2FD2]
          bg-transparent
          px-6
          py-2
          font-gilroy-semibold
          text-[18px]
          font-semibold
          text-[#4E2FD2]
          transition-colors
          duration-200
          hover:bg-[#4E2FD2]
          hover:text-white
          disabled:cursor-not-allowed
          disabled:opacity-50
          disabled:hover:bg-transparent
          disabled:hover:text-[#4E2FD2]
          cursor-pointer
          ${className}
        `}
      >
        Next: {label}
      </button>
    </div>
  );
}