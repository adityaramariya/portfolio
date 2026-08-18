"use client";

console.log(`path , ${basePath}`);

import { basePath } from "@/constant";
import RecruiterChat from "./RecruiterChat";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-2 right-5 z-40 hidden items-center gap-1.5 rounded-2xl border border-white/10 bg-gray-950/85 p-1.5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex">
      {/* Resume */}
      <a
        href={`${basePath}/aditya_ramariya_front_end_developer.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
      >
        Resume
        <span className="ml-1 text-gray-500">↓</span>
      </a>

      <a
        href="#contact"
        className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
      >
        Contact
      </a>
      <RecruiterChat />
    </div>
  );
};

export default FloatingActions;
