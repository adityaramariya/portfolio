const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-gray-950 sm:py-32"
    >
      {/* Background decoration */}
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-indigo-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              About Me
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            I don't just build interfaces. <br />I build{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              frontend experiences
            </span>{" "}
            that scale.
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          {/* Description */}
          <div>
            <p className="text-xl leading-9 text-gray-700">
              I'm a Senior Frontend Developer with 8+ years of experience
              building modern, responsive and production-ready web applications.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              I specialize in React, Next.js and TypeScript, with a strong focus
              on creating reusable components, scalable frontend architecture
              and seamless user experiences. I enjoy turning complex
              requirements and designs into clean, maintainable and
              high-performing interfaces.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              Over the years, I've worked across different products and
              environments, collaborating with designers, backend developers and
              product teams to turn ideas into reliable digital experiences.
            </p>

            {/* Tech Stack */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux",
                "Responsive Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 self-start">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold tracking-tight text-gray-950">
                8+
              </div>
              <p className="mt-2 text-sm text-gray-500">Years of Experience</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold tracking-tight text-gray-950">
                20+
              </div>
              <p className="mt-2 text-sm text-gray-500">Projects Delivered</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold tracking-tight text-gray-950">
                100%
              </div>
              <p className="mt-2 text-sm text-gray-500">Responsive Approach</p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold tracking-tight text-gray-950">
                UI
              </div>
              <p className="mt-2 text-sm text-gray-500">Focused Development</p>
            </div>
          </div>
        </div>

        {/* Bottom Statement */}

        <div className="mt-20 ">
          {/* <h4 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-2xl mb-5 border-b border-gray-400 pb-5">
            Professional {""}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Contributions
            </span>{" "}
          </h4> */}

          <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 pb-3 border-b border-gray-200 ">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Professional contributions
            </span>{" "}
          </h4>

          <div className="grid gap-6 md:grid-cols-3 mt-8">
            <div>
              <h3 className="font-semibold text-gray-950">
                Clean & reusable architecture
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Built reusable & component driven interfaces, and common UI
                patterns with attention to maintainability and consistency.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">
                Responsive web development
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Translated designs and requirements into layouts for desktop,
                tablet, and mobile using HTML/CSS, bootstrap, flexbox, and CSS
                grid.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">
                API & application integration
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Worked with API-driven interfaces for authentication,
                registration, filtering, serarch, mapping, device compatibility
                and data driven workflows
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">
                State & access management
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                worked with react-redux, redux, context API, reducers and RBAC
                to support application state and user permission.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-950">
                Performance focused
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fast, accessible and optimized experiences without compromising
                visual quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
