import React from "react";
import { twMerge } from "tailwind-merge";

// ----------------------------------------------------------------

type ModalFooterProps = {
  children: React.ReactNode;
  className?: string;
};

// ----------------------------------------------------------------

export const ModalFooter = React.memo((props: ModalFooterProps) => {
  const { children, className } = props;

  return (
    <div id="modal-footer" className={twMerge("px-6 pb-6", className)}>
      {children}
    </div>
  );
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalFooter.displayName = "ModalFooter";
}
