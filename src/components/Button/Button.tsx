import React from "react";
import { twMerge } from "tailwind-merge";

// ----------------------------------------------------------------

type ButtonVariant = "primary";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  icon?: JSX.Element;
  iconLeading?: boolean;
  iconTrailing?: boolean;

  // button default properties
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

// ----------------------------------------------------------------

// variant styles
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary-600 rounded-md text-base-white font-semibold hover:bg-primary-700 disabled:text-gray-light-400 disabled:bg-gray-light-100 disabled:border-gray-light-200 border border-primary-700",
};

// size styles
const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-sm gap-1 px-3 py-2",
  md: "text-sm gap-1 py-2.5 px-3.5",
  lg: "text-md gap-1.5 py-2.5 px-4",
  xl: "text-md gap-1.5 py-3 px-[18px]",
  "2xl": "text-lg gap-2.5 py-4 px-[22px]",
};

// ----------------------------------------------------------------

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { onClick, size, variant, icon, children, className, iconLeading = false, iconTrailing = false, type = "button", disabled = false } = props;

  return (
    <button ref={ref} onClick={onClick} type={type} disabled={disabled} className={twMerge("flex items-center transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500", variant && variantStyles[variant], size && sizeStyles[size], className)}>
      {iconLeading && icon}
      {children}
      {iconTrailing && icon}
    </button>
  );
});
