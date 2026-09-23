import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32"
    >
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
