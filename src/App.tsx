import { useState } from "react";

import { Modal } from "./components/Modal";
import { Button } from "./components/Button";

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className="p-8 min-h-screen bg-base-white">
      <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Example Modal">
        <p>This is a modal example with WAI-ARIA compliance.</p>
      </Modal>
    </main>
  );
};
