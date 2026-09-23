import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/90" />
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />
      {children}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent" />
    </section>
  );
};

export default Wrapper;
