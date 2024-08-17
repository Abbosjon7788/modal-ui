import React from "react";

import { Modal } from "./components/Modal";
import { Button } from "./components/Button";

import SaveSVG from "./assets/icons/save.svg";

export const App = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <main className="p-8 min-h-screen bg-base-white">
        <Button variant="primary" size="lg" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header>
          <h2 className="text-lg font-semibold mb-1 text-gray-light-900">Add experience</h2>
          <p className="text-gray-light-600 text-sm">Share where you’ve worked on your profile.</p>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>test</Modal.Body>
          <Modal.Footer className="flex items-center gap-3">
            <Button variant="secondary-gray" icon={<SaveSVG />} iconLeading size="lg" className="w-full">
              Save as draft
            </Button>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Add experience
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};
