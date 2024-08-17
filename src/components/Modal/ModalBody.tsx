import React from "react";

// ----------------------------------------------------------------

type ModalBodyProps = {
  children: React.ReactNode;
};

// ----------------------------------------------------------------

export const ModalBody = React.memo((props: ModalBodyProps) => {
  const { children } = props;

  return <div className="px-6 mb-8">{children}</div>;
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalBody.displayName = "ModalBody";
}
