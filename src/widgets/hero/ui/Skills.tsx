import { skills } from "../model/hero-data";

const TechStack = () => (
  <div className="mt-6 flex flex-wrap justify-center gap-2">
    {skills.map((tech) => (
      <span
        key={tech}
        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-sm sm:text-sm"
      >
        {tech}
      </span>
    ))}
  </div>
);

export default TechStack;
