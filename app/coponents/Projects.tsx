"use client";

import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Compatibility Checker",
    category: "Web Application",
    description:
      "Responsive application that determines whether a device is compatible with selected applications, with manual search and QR-based device identification",
    technologies: [
      "Next.JS",
      "React.JS",
      "TypeScript",
      "Hooks",
      "Tailwind CSS",
    ],
    image: "/images/scottdunn.png",
  },
  {
    number: "02",
    title: "OneID Portal",
    category: "SaaS / Dashboard",
    description:
      "Administrative web portal for managing a mobile application and its operational workflows",
    technologies: ["React.JS", "React-Admin", "Hooks", "Material UI"],
    image: "/images/scottdunn.png",
    href: "#",
  },
  {
    number: "03",
    title: "ScottDunn",
    category: "Marketing Website",
    description:
      "Luxury travel website presenting premium holiday experiences across ski destinations, safari lodges and expedition cruises.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    image: "/images/scottdunn.png",
    href: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24 text-gray-950 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-100/50 blur-[120px]" />
      <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-purple-100/50 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-indigo-600" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Projects I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Proud of.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
              A selection of projects where I turned ideas, designs and complex
              requirements into scalable frontend experiences.
            </p>
          </div>

          {/* <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gray-950 transition-colors hover:text-indigo-600"
          >
            Have a project in mind?
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a> */}
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <article key={project.number} className="group">
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-sm">
                  {/* Browser Bar */}
                  <div className="absolute left-0 right-0 top-0 z-10 flex h-10 items-center gap-1.5 border-b border-white/10 bg-gray-950/90 px-4 backdrop-blur-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>

                  <div className="relative aspect-[16/11] overflow-hidden">
                    {/* <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    /> */}

                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <span className="text-sm font-medium text-gray-400">
                        Image coming soon
                      </span>
                    </div>

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-indigo-600">
                      {project.number}
                    </span>

                    <span className="h-px w-8 bg-gray-300" />

                    <span className="text-sm font-medium text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-gray-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {/* <a
                    href={project.href}
                    className="group/link mt-8 inline-flex items-center gap-3 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600"
                  >
                    View Case Study
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a> */}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 overflow-hidden rounded-3xl bg-gray-950 p-8 text-white sm:p-12">
          <div className="relative">
            <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full bg-indigo-600/30 blur-[100px]" />
            <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />

            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400">
                  More Projects
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Want to see more of my work?
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                  Explore more projects, experiments and frontend work.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                Let's Work Together
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

export default Projects;
