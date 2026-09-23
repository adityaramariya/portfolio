import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-gray-950 sm:py-32"
    >
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
