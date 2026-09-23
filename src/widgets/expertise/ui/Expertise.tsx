import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-indigo-500" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              What I Do
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I combine engineering, design thinking and frontend expertise to
            build interfaces that are beautiful, responsive and built to scale.
          </p>
        </div>

        {/* Expertise Grid */}

        <ExpertiseCard />

        {/* Bottom Statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-sm leading-6 text-gray-500">
            From the first line of code to the final pixel, I focus on building
            products that are reliable, maintainable and enjoyable to use.
          </p>

          <a
            href="#projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
          >
            Explore my work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
