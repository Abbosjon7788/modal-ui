import React from "react";
import { twMerge } from "tailwind-merge";

// ----------------------------------------------------------------

type ModalHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

// ----------------------------------------------------------------

export const ModalHeader = React.memo((props: ModalHeaderProps) => {
  const { children, className } = props;

  return (
    <div id="modal-title" className={twMerge("mb-5 px-6 pt-[88px]", className)}>
      {children}
    </div>
  );
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalHeader.displayName = "ModalHeader";
}
