import { twMerge } from "tailwind-merge";

type SlideProps = {
  className?: string;
  children: React.ReactNode;
};

export const Slide = (props: SlideProps) => {
  const { className, children } = props;

  return <li className={twMerge("min-w-full flex-shrink-0", className)}>{children}</li>;
};
