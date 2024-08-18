import React from "react";
import { twMerge } from "tailwind-merge";

// ----------------------------------------------------------------

type ModalBodyProps = {
  children: React.ReactNode;
  className?: string;
};

// ----------------------------------------------------------------

export const ModalBody = React.memo((props: ModalBodyProps) => {
  const { children, className } = props;

  return <div className={twMerge("px-6 mb-8", className)}>{children}</div>;
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalBody.displayName = "ModalBody";
}
