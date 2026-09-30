"use client";

import SectionHeader from "@/shared/ui/SectionHeader";
import Highlight from "@/shared/ui/Highlight";

const techColors = {
  react: "from-cyan-400 to-blue-500",
  javascript: "from-yellow-300 to-amber-500",
  typescript: "from-blue-500 to-indigo-700",
  reactHooks: "from-sky-400 to-cyan-600",
  nextjs: "from-slate-500 to-gray-800",

  redux: "from-violet-400 to-purple-600",
  reduxToolkit: "from-purple-500 to-fuchsia-600",
  contextApi: "from-pink-400 to-rose-600",

  graphql: "from-pink-500 to-fuchsia-600",
  restApi: "from-emerald-400 to-teal-600",

  html5: "from-orange-400 to-red-500",
  css3: "from-blue-400 to-indigo-600",
  tailwindCss: "from-cyan-400 to-teal-500",
  bootstrap: "from-purple-400 to-indigo-600",
  materialUi: "from-blue-400 to-cyan-600",

  microFrontend: "from-fuchsia-400 to-purple-600",
  featureSlicedDesign: "from-indigo-400 to-violet-600",

  authentication: "from-indigo-400 to-blue-600",
  jwt: "from-amber-400 to-orange-600",
  rbac: "from-rose-400 to-pink-600",

  reusableComponents: "from-teal-400 to-emerald-600",
  crossBrowser: "from-violet-400 to-purple-600",
  performance: "from-amber-400 to-red-500",
  responsiveDesign: "from-lime-400 to-green-600",

  git: "from-orange-500 to-red-600",
  webpack: "from-sky-400 to-blue-600",
  npm: "from-red-400 to-rose-600",
  sonarQube: "from-teal-400 to-emerald-600",
  cicd: "from-emerald-400 to-green-600",
  docker: "from-blue-400 to-cyan-600",
};

const techStack = {
  Frontend: [
    {
      name: "React",
      color: techColors.react,
    },
    {
      name: "JavaScript ES6+",
      color: techColors.javascript,
    },
    {
      name: "TypeScript",
      color: techColors.typescript,
    },
    {
      name: "React Hooks",
      color: techColors.reactHooks,
    },
    {
      name: "Next.js",
      color: techColors.nextjs,
    },
  ],

  "State Management": [
    {
      name: "Redux",
      color: techColors.redux,
    },
    {
      name: "Redux Toolkit",
      color: techColors.reduxToolkit,
    },
    {
      name: "Context API",
      color: techColors.contextApi,
    },
  ],

  "API & Data": [
    {
      name: "REST API",
      color: techColors.restApi,
    },
    {
      name: "GraphQL",
      color: techColors.graphql,
    },
  ],

  "UI & Styling": [
    {
      name: "HTML5",
      color: techColors.html5,
    },
    {
      name: "CSS3",
      color: techColors.css3,
    },
    {
      name: "Tailwind CSS",
      color: techColors.tailwindCss,
    },
    {
      name: "Bootstrap",
      color: techColors.bootstrap,
    },
    {
      name: "Material UI",
      color: techColors.materialUi,
    },
  ],

  Architecture: [
    {
      name: "Micro-frontend Architecture",
      color: techColors.microFrontend,
    },
    {
      name: "Feature-Sliced Design",
      color: techColors.featureSlicedDesign,
    },
  ],

  "Security & Access Control": [
    {
      name: "Authentication",
      color: techColors.authentication,
    },
    {
      name: "JWT",
      color: techColors.jwt,
    },
    {
      name: "RBAC",
      color: techColors.rbac,
    },
  ],

  Engineering: [
    {
      name: "Reusable UI Components",
      color: techColors.reusableComponents,
    },
    {
      name: "Cross-Browser Compatibility",
      color: techColors.crossBrowser,
    },
    {
      name: "Performance",
      color: techColors.performance,
    },
    {
      name: "Responsive Design",
      color: techColors.responsiveDesign,
    },
  ],

  Tooling: [
    {
      name: "Git",
      color: techColors.git,
    },
    {
      name: "Webpack",
      color: techColors.webpack,
    },
    {
      name: "npm",
      color: techColors.npm,
    },
    {
      name: "SonarQube",
      color: techColors.sonarQube,
    },
    {
      name: "CI/CD",
      color: techColors.cicd,
    },
    {
      name: "Docker",
      color: techColors.docker,
    },
  ],
};

const TechStack = () => {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-gray-950 py-12 text-white sm:py-32"
    >
      {/* Background decoration */}
      {/* <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-100/50 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/50 blur-[120px]" /> */}

      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <SectionHeader
            title="Tech Stack"
            description={
              <>
                Tools I use to{" "}
                <Highlight variant="dark">bring ideas to life.</Highlight>
              </>
            }
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
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
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-300">
                  {category}
                </h3>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Technology Cards */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {/* overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/40 */}

                {technologies.map((technology) => (
                  <div
                    key={technology.name}
                    className="group relative bg-white/[0.05] transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05] sm:p-4"
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
                            <h4 className="truncate font-semibold text-gray-300">
                              {technology.name}
                            </h4>

                            {/* <span className="text-xs font-bold text-indigo-600">
                              {technology.level}
                            </span> */}
                          </div>
                        </div>

                        {/* Score */}
                        {/* <span className="shrink-0 text-sm font-bold text-gray-600">
                          {technology.rating}/5
                        </span> */}
                      </div>

                      {/* Proficiency bar */}
                      {/* <div className="mt-5 flex gap-1">
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
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 overflow-hidden bg-white/[0.05] p-8 text-white sm:p-10">
          <div className="relative">
            <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-indigo-900/20 blur-[100px]" />

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
