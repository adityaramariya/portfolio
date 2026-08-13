"use client";

const techStack = {
  Core: [
    {
      name: "React",
      description: "Component-driven UI development",
      color: "from-cyan-400 to-blue-500",
      rating: 4,
      level: "Advance",
    },
    {
      name: "Next.js",
      description: "Modern React applications",
      color: "from-purple-400 to-purple-700",
      rating: 3,
      level: "Advance",
    },
    {
      name: "TypeScript",
      description: "Type-safe frontend development",
      color: "from-blue-500 to-blue-700",
      rating: 3,
      level: "Advance",
    },
    {
      name: "JavaScript",
      description: "Modern ES6+ development",
      color: "from-yellow-300 to-yellow-500",
      rating: 4,
      level: "Advance",
    },
  ],
  "UI & Styling": [
    {
      name: "Tailwind CSS",
      description: "Utility-first responsive UI",
      color: "from-cyan-400 to-cyan-600",
      rating: 4,
      level: "Advance",
    },
    {
      name: "Bootstrap",
      description: "Responsive component systems",
      color: "from-purple-400 to-purple-700",
      rating: 4,
      level: "Advance",
    },
    {
      name: "HTML5",
      description: "Semantic web structure",
      color: "from-orange-400 to-red-500",
      rating: 4,
      level: "Advance",
    },
    {
      name: "CSS3",
      description: "Modern layouts and animations",
      color: "from-blue-400 to-indigo-600",
      rating: 4,
      level: "Advance",
    },
  ],
  "State Management": [
    {
      name: "Redux",
      description: "Predictable application state",
      color: "from-purple-400 to-purple-600",
      rating: 4,
      level: "Advance",
    },
    {
      name: "Context API",
      description: "Lightweight shared state",
      color: "from-cyan-400 to-blue-500",
      rating: 4,
      level: "Advance",
    },
  ],
  Engineering: [
    {
      name: "Responsive Design",
      description: "Desktop, tablet & mobile",
      color: "from-emerald-400 to-green-600",
      rating: 4,
      level: "Advance",
    },
    {
      name: "Reusable Components",
      description: "Scalable component architecture",
      color: "from-indigo-400 to-purple-600",
      rating: 4,
      level: "Advance",
    },
    {
      name: "API Integration",
      description: "Connecting frontend to services",
      color: "from-pink-400 to-rose-600",
      rating: 4,
      level: "Advance",
    },
    {
      name: "Performance",
      description: "Fast and optimized experiences",
      color: "from-amber-400 to-orange-600",
      rating: 4,
      level: "Advance",
    },
  ],
};

const TechStack = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-white py-24 text-gray-950 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/50 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-indigo-600" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Tech Stack
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Tools I use to{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              bring ideas to life.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            A modern frontend toolkit focused on building scalable, maintainable
            and high-performing digital experiences.
          </p>
        </div>

        {/* Stack Groups */}
        <div className="space-y-14">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category}>
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
                  {category}
                </h3>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* Technology Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40"
                  >
                    <div className="relative">
                      {/* Top */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-3">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${technology.color} text-sm font-bold text-white shadow-md`}
                          >
                            {technology.name.charAt(0)}
                          </div>

                          <div className="min-w-0">
                            <h4 className="truncate font-semibold text-gray-950">
                              {technology.name}
                            </h4>

                            <span className="text-xs font-bold text-indigo-600">
                              {technology.level}
                            </span>
                          </div>
                        </div>

                        {/* Score */}
                        <span className="shrink-0 text-sm font-bold text-gray-600">
                          {technology.rating}/5
                        </span>
                      </div>

                      {/* Proficiency bar */}
                      <div className="mt-5 flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <span
                            key={level}
                            className={`h-1.5 flex-1 rounded-full  ${
                              level <= technology.rating
                                ? "bg-indigo-500"
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Description */}
                      {/* <p className="mt-4 text-sm leading-6 text-gray-500">
                        {technology.description}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-gray-950 p-8 text-white sm:p-10">
          <div className="relative">
            <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
                  The goal
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Technology is a tool. Great experiences are the result.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  I choose the right tools based on the product, requirements
                  and long-term goals—not just because they are popular.
                </p>
              </div>

              <a
                href="#projects"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                See My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
