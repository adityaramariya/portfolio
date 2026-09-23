import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
};

const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32"
    >
      {/* Background Glows */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
