import React from "react";

// ----------------------------------------------------------------

type ModalHeaderProps = {
  children: React.ReactNode;
};

// ----------------------------------------------------------------

export const ModalHeader = React.memo((props: ModalHeaderProps) => {
  const { children } = props;

  return (
    <div id="modal-title" className="mb-5 px-6 pt-[88px]">
      {children}
    </div>
  );
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalHeader.displayName = "ModalHeader";
}
