import React from "react";
import ReactDOM from "react-dom";
import { twMerge } from "tailwind-merge";

import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
import { ModalBackground } from "./ModalBackground";
import { ModalCloseButton } from "./ModalCloseButton";

// ----------------------------------------------------------------

type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  children: React.ReactNode;
  shouldCloseOutsideClick?: boolean;
  hasCloseIcon?: boolean;
};

// ----------------------------------------------------------------

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, shouldCloseOutsideClick, hasCloseIcon = true } = props;

  const [showModal, setShowModal] = React.useState(false);
  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => {
        modalRef.current?.focus();
      }, 10); // Ensure focus happens after the transition starts
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOutsideClick = () => {
    if (shouldCloseOutsideClick) {
      onClose();
    }
  };

  if (!isOpen && !showModal) return null;

  return ReactDOM.createPortal(
    <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} onKeyDown={handleKeyDown} onClick={handleOutsideClick} onTransitionEnd={() => !isOpen && setShowModal(false)} className={twMerge("fixed inset-0 z-50 flex items-center justify-center bg-[#0C111D] bg-opacity-70 px-4 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")}>
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={twMerge("bg-base-white relative rounded-xl overflow-hidden shadow-xl max-w-[640px] w-full transform transition-transform duration-300", isOpen ? "animate-modalIn" : "animate-modalOut")}
      >
        <ModalBackground />
        {hasCloseIcon && <ModalCloseButton handleClose={onClose} />}
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

// ----------------------------------------------------------------

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
