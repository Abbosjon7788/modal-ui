import React from "react";
import { twMerge } from "tailwind-merge";

import InfoSVG from "../../assets/icons/info.svg";

// ----------------------------------------------------------------

type ResizeType = "vertical" | "horizontal" | "both" | "none";

type TextAreaProps = {
  name: string;
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  hasHelpIcon?: boolean;
  hintText?: string;
  resize?: ResizeType;
  className?: string;
  disabled?: boolean;
};

// ----------------------------------------------------------------

// resizing styles
const resizeStyles: Record<ResizeType, string> = {
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
  none: "resize-none",
};

// ----------------------------------------------------------------

export const TextArea = (props: TextAreaProps) => {
  const { label, isRequired, name, hintText, hasHelpIcon, placeholder, className, disabled, resize = "vertical" } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <label htmlFor={name} className={twMerge("block", className)} onBlur={handleBlur}>
      <p className="flex items-center text-sm font-medium mb-1.5">
        <span className="mr-0.5 text-gray-light-700">
          {label} {isRequired && <sup className="text-primary-600">*</sup>}
        </span>
        {hasHelpIcon && (
          <span title="This is a hint text to help user.">
            <InfoSVG />
          </span>
        )}
      </p>
      <textarea name={name} id={name} rows={4} disabled={disabled} placeholder={placeholder} onFocus={handleFocus} className={twMerge("w-full outline-none border border-gray-light-300 rounded-md overflow-hidden text-md placeholder-gray-light-500 text-gray-light-900 px-3 py-3.5 disabled:bg-gray-light-50", isFocused && "border-transparent shadow-[0_0_0_2px] shadow-primary-500", resize && resizeStyles[resize])}></textarea>
      {hintText && <p className="text-gray-light-600 mt-1.5 text-sm">{hintText}</p>}
    </label>
  );
};
