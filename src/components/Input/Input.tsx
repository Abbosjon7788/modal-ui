import React from "react";
import { twMerge } from "tailwind-merge";

// ----------------------------------------------------------------

type InputProps = {
  name: string;
  autoFocus?: boolean;
  placeholder?: string;
  label?: React.ReactNode;
  prefix?: string;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  icon?: JSX.Element;
};

// ----------------------------------------------------------------

export const Input = (props: InputProps) => {
  const { name, placeholder, label, icon, className, labelClassName, wrapperClassName, prefix, autoFocus = false } = props;

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        setIsFocused(true);
        inputRef.current?.focus();
      }); // set focus into input element after modal component is totally mounted
    }
  }, [autoFocus]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <label htmlFor={name} className={twMerge("block", className)}>
      <p className={twMerge("text-sm text-gray-light-700 font-medium mb-1.5", labelClassName)}>{label}</p>
      <div className={twMerge("text-gray-light-900 text-md rounded-md shadow-xs", (prefix || icon) && "flex items-center", !prefix && "border border-gray-light-300", !prefix && isFocused && "shadow-[0_0_0_2px] shadow-primary-500 border-transparent", wrapperClassName)}>
        {icon && <span className="py-2.5 pl-3.5">{icon}</span>}
        {prefix && <span className="py-2.5 px-3.5 border-l border-t border-b border-gray-light-300 rounded-l-md">{prefix}</span>}
        <div className={twMerge("py-2.5 px-3.5 w-full", prefix && "border border-gray-light-300 rounded-r-md", isFocused && prefix && "shadow-[0_0_0_2px] shadow-primary-500 border-transparent", icon && "pl-2")}>
          <input ref={inputRef} type="text" name={name} id={name} autoFocus={autoFocus} onFocus={handleFocus} onBlur={handleBlur} placeholder={placeholder} className="outline-none w-full text-md placeholder-gray-light-500" />
        </div>
      </div>
    </label>
  );
};
