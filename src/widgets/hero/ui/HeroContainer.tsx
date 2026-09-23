import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="relative z-10 flex min-h-screen items-center px-5 pt-20">
    <div className="mx-auto w-full max-w-4xl py-16 text-center text-white sm:py-20">
      {children}
    </div>
  </div>
);
export default Container;
