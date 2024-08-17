import React from "react";

import { Button } from "../Button";

import CloseSVG from "../../assets/icons/close.svg";

// ----------------------------------------------------------------

type ModalCloseButtonProps = {
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
};

// ----------------------------------------------------------------

export const ModalCloseButton = React.memo((props: ModalCloseButtonProps) => {
  const { handleClose } = props;

  return <Button onClick={handleClose} icon={<CloseSVG />} iconLeading className="absolute top-4 right-4 text-gray-light-400 p-2.5 rounded-md transition-colors duration-300 hover:bg-gray-light-50 hover:text-gray-light-500" />;
});

// ----------------------------------------------------------------

if (process.env.NODE_ENV !== "production") {
  ModalCloseButton.displayName = "ModalCloseButton";
}
