import React from "react";
import { useSwipeable } from "react-swipeable";
import { twMerge } from "tailwind-merge";

import { Slide } from "./Slide";

// ----------------------------------------------------------------

type SliderProps = {
  children: React.ReactNode;
  nextSlide: VoidFunction;
  prevSlide: VoidFunction;
  className?: string;
  currentSlide: number;
};

// ----------------------------------------------------------------

export const Slider = (props: SliderProps) => {
  const { children, className, prevSlide, nextSlide, currentSlide } = props;

  const childrenCount = React.Children.toArray(children).length;

  const handleNextSlide = () => {
    if (childrenCount === 1) return;
    nextSlide();
  };

  const handlePrevSlide = () => {
    if (childrenCount === 1) return;
    prevSlide();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNextSlide(),
    onSwipedRight: () => handlePrevSlide(),
    trackMouse: true, // enable mouse swipe
  });

  return (
    <div className="w-full">
      <div {...handlers} className={twMerge("relative overflow-hidden", className)}>
        <ul className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {children}
        </ul>
      </div>
      {childrenCount > 1 && (
        <div className="flex items-center justify-center w-full gap-4">
          <button title="prev slide" className={twMerge("w-2.5 h-2.5 rounded-full bg-gray-light-200", currentSlide === 0 && "bg-primary-600")} onClick={handlePrevSlide} />
          <button title="next slide" className={twMerge("w-2.5 h-2.5 rounded-full bg-gray-light-200", currentSlide === 1 && "bg-primary-600")} onClick={handleNextSlide} />
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------

Slider.Slide = Slide;
