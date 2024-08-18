import React from "react";
import { twMerge } from "tailwind-merge";

import { Modal } from "./components/Modal";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { TextArea } from "./components/TextArea";
import { Dropdown } from "./components/Dropdown";
import { Slider } from "./components/Slider";

import { useMedia } from "./hooks/useMedia";

import SaveSVG from "./assets/icons/save.svg";
import SearchSVG from "./assets/icons/search.svg";

// =================================================================

const DesktopView = () => {
  const isDesktop = useMedia("min-width: 768px");

  return (
    <Modal.Body className={twMerge(!isDesktop && "mb-5")}>
      <Input name="title-1" autoFocus label="Title" placeholder="What is your title?" className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mb-4">
        <Input name="company" label="Company" icon={<SearchSVG />} placeholder="Search for company" />
        <Input name="website" prefix="https://" label="Website" placeholder="www.example.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mb-4">
        <Input name="location" label="Location" icon={<SearchSVG />} placeholder="Search for city" />
        {isDesktop && (
          <Dropdown
            label="Employment"
            options={[
              {
                id: 1,
                label: "Full time",
              },
              {
                id: 2,
                label: "Part time",
              },
              {
                id: 3,
                label: "Remote",
              },
            ]}
          />
        )}
      </div>
      {isDesktop && (
        <React.Fragment>
          <Input name="title-2" label="Title" placeholder="What is your title?" className="mb-4" />
          <TextArea name="description" label="Description" placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints." hasHelpIcon />
        </React.Fragment>
      )}
    </Modal.Body>
  );
};

const MobileView = () => {
  return (
    <Modal.Body className="mb-5">
      <Dropdown
        hasMenuFullWidth
        label="Employment"
        options={[
          {
            id: 1,
            label: "Full time",
          },
          {
            id: 2,
            label: "Part time",
          },
          {
            id: 3,
            label: "Remote",
          },
        ]}
        className="mb-4"
        menuButtonClassName="w-full justify-between"
      />
      <Input name="title-2" label="Title" placeholder="What is your title?" className="mb-4" />
      <TextArea name="description" label="Description" placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints." hasHelpIcon />
    </Modal.Body>
  );
};

// =================================================================

export const App = () => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);

  const isDesktop = useMedia("min-width: 768px");

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isModalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    if (isDesktop) {
      setCurrentSlide(0);
    }
  }, [isDesktop]);

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const handleModalClose = () => {
    setModalOpen(false);
    btnRef.current?.focus();
  };

  const nextSlide = () => setCurrentSlide(1);
  const prevSlide = () => setCurrentSlide(0);

  return (
    <React.Fragment>
      <main className="p-8 min-h-screen bg-base-white">
        <Button ref={btnRef} variant="primary" size="lg" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
      </main>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Modal.Header className={twMerge(!isDesktop && "pt-5")}>
          <h2 className="text-lg font-semibold mb-1 text-gray-light-900">Add experience</h2>
          <p className="text-gray-light-600 text-sm">Share where you’ve worked on your profile.</p>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Slider currentSlide={currentSlide} nextSlide={nextSlide} prevSlide={prevSlide}>
            <Slider.Slide>
              <DesktopView />
            </Slider.Slide>
            {!isDesktop && (
              <Slider.Slide>
                <MobileView />
              </Slider.Slide>
            )}
          </Slider>
          <Modal.Footer className={twMerge("flex items-center gap-3", !isDesktop && "mt-6 flex-col-reverse")}>
            <Button variant="secondary-gray" icon={<SaveSVG />} iconLeading size="lg" className="w-full">
              Save as draft
            </Button>
            {!isDesktop && currentSlide === 0 && (
              <Button variant="primary" onClick={nextSlide} size="lg" className="w-full">
                Next
              </Button>
            )}
            {((!isDesktop && currentSlide === 1) || (isDesktop && currentSlide === 0)) && (
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Add experience
              </Button>
            )}
          </Modal.Footer>
        </form>
      </Modal>
    </React.Fragment>
  );
};
