import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import { twMerge } from "tailwind-merge";

import ChevronDown from "../../assets/icons/chevron-down.svg";
import CheckSVG from "../../assets/icons/check.svg";
import InfoSVG from "../../assets/icons/info.svg";

// ----------------------------------------------------------------

type DropdownProps = {
  label: string;
  options: { id: number; label: string }[];
  menuClassName?: string;
  menuButtonClassName?: string;
  className?: string;
  isRequired?: boolean;
  hasHelpIcon?: boolean;
  hintText?: string;
  hasMenuFullWidth?: boolean;
};

// ----------------------------------------------------------------

export const Dropdown = (props: DropdownProps) => {
  const { options, label, menuClassName, menuButtonClassName, hasHelpIcon, hintText, isRequired, className, hasMenuFullWidth } = props;

  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const [selectedOption, setSelectedOption] = React.useState(options[0]);

  return (
    <Menu>
      <div className={className}>
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
        <MenuButton ref={buttonRef} className={twMerge("flex items-center gap-2 rounded-md bg-base-white py-2.5 px-3.5 border border-gray-light-300 text-md font-semibold text-gray-light-900 focus:outline-none data-[open]:shadow-[0_0_0_2px] data-[open]:shadow-primary-500 data-[open]:border-transparent data-[focus]:border-transparent data-[focus]:shadow-[0_0_0_2px] data-[focus]:shadow-primary-500", menuButtonClassName)}>
          {selectedOption.label}
          <ChevronDown />
        </MenuButton>
        {hintText && <p className="text-gray-light-600 mt-1.5 text-sm">{hintText}</p>}
      </div>

      <MenuItems transition anchor="bottom end" style={{ width: hasMenuFullWidth ? buttonRef.current?.clientWidth : "auto" }} className={twMerge("min-w-52 z-50 p-1.5 origin-top-right mt-1 rounded-md border shadow-lg border-gray-light-200 bg-base-white text-md text-gray-light-600 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0", menuClassName)}>
        {options.map((option) => (
          <MenuItem key={option.id}>
            <button type="button" onClick={() => setSelectedOption(option)} className="group w-full flex items-center justify-between gap-2 rounded-sm py-2.5 px-2 data-[focus]:bg-gray-light-50 data-[focus]:text-gray-light-900">
              {option.label}
              {option.id === selectedOption.id && <CheckSVG />}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
