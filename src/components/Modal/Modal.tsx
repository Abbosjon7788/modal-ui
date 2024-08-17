import React from "react";
import ReactDOM from "react-dom";

// ----------------------------------------------------------------

type ModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  title: string;
  children: React.ReactNode;
};

// ----------------------------------------------------------------

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, title, children } = props;

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

  if (!isOpen && !showModal) return null;

  return ReactDOM.createPortal(
    <div ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="modal-title" tabIndex={-1} onKeyDown={handleKeyDown} onClick={onClose} onTransitionEnd={() => !isOpen && setShowModal(false)} className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0C111D] bg-opacity-70 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}>
      <div className={`bg-white rounded-lg overflow-hidden shadow-xl max-w-lg w-full transform transition-transform duration-300 ${isOpen ? "animate-modalIn" : "animate-modalOut"}`}>
        <header className="flex justify-between items-center p-4 border-b">
          <h2 id="modal-title" className="text-lg font-semibold">
            {title}
          </h2>
          <button onClick={onClose} aria-label="Close modal" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            &times;
          </button>
        </header>
        <div className="p-4">{children}</div>
        <footer className="flex justify-end p-4 border-t">
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Close
          </button>
        </footer>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};
