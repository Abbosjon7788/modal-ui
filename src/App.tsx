import React from "react";

import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";

import SaveSVG from "./assets/icons/save.svg";
import SearchSVG from "./assets/icons/search.svg";

export const App = () => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const handleModalClose = () => {
    setModalOpen(false);
    btnRef.current?.focus();
  };

  return (
    <React.Fragment>
      <main className="p-8 min-h-screen bg-base-white">
        <Button ref={btnRef} variant="primary" size="lg" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </main>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>
          <h2 className="text-lg font-semibold mb-1 text-gray-light-900">Add experience</h2>
          <p className="text-gray-light-600 text-sm">Share where you’ve worked on your profile.</p>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Input name="title-1" autoFocus label="Title" placeholder="What is your title?" className="mb-4" />
            <div className="flex items-center gap-4 mb-4">
              <Input name="company" label="Company" icon={<SearchSVG />} placeholder="Search for company" />
              <Input name="website" prefix="https://" label="Website" placeholder="www.example.com" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Input name="location" label="Location" icon={<SearchSVG />} placeholder="Search for city" />
            </div>
            <Input name="title-2" label="Title" placeholder="What is your title?" className="mb-4" />
            <TextArea name="description" label="Description" placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints." hasHelpIcon />
          </Modal.Body>
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
