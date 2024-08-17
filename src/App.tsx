import { useState } from "react";

import { Modal } from "./components/Modal";

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="p-8 min-h-screen bg-[#555861]">
      <button onClick={() => setModalOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Example Modal">
        <p>This is a modal example with WAI-ARIA compliance.</p>
      </Modal>
    </main>
  );
};
