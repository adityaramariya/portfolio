"use client";

import { basePath } from "@/shared/config/app-config";
// import RecruiterChat from "./RecruiterChat";

interface FloatingActionsProps {
  position?: any;
}

const FloatingActions = ({ position }: FloatingActionsProps) => {
  return (
    <div
      className={`${position ? "relative" : "fixed bottom-2"} right-5 z-40 hidden items-center gap-1.5  p-1.5 backdrop-blur-xl sm:flex p-3 bg-transparent`}
    >
      {/* Resume */}
      <a
        href={`${basePath}/aditya_ramariya_frontend_developer.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 bg-gray-800 hover:bg-white/10 hover:text-white"
      >
        Resume
        <span className="ml-1 text-gray-500">↓</span>
      </a>

      <a
        href="#contact"
        className="bg-gray-300 px-4 py-2.5 text-sm font-semibold  text-gray-350 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
      >
        Contact
      </a>
      {/* <RecruiterChat /> */}
    </div>
  );
};

export default FloatingActions;
