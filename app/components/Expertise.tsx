import Card from "./ui/card/Card";
import Pills from "./ui/Pills";

const Expertise = () => {
  const expertise = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building scalable, production-ready web applications with modern frontend technologies and clean, maintainable code.",
      technologies: ["React", "Next.js", "TypeScript"],
    },
    {
      number: "02",
      title: "UI Engineering",
      description:
        "Transforming designs into polished, responsive interfaces with reusable components and attention to every detail.",
      technologies: ["Tailwind CSS", "Bootstrap", "HTML", "CSS"],
    },
    {
      number: "03",
      title: "State & Architecture",
      description:
        "Designing predictable application architecture and managing complex application state with scalable patterns.",
      technologies: ["Redux", "Context API", "Reusable Components"],
    },
    {
      number: "04",
      title: "Performance & UX",
      description:
        "Creating fast, accessible and responsive experiences that work seamlessly across devices and screen sizes.",
      technologies: ["Responsive Design", "Performance", "Accessibility"],
    },
  ];

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
        <div className="grid gap-5 md:grid-cols-2">
          {expertise.map(({ number, title, description, technologies }) => (
            <Card key={number} variant="dark">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/20" />

              {/* Number */}
              <div className="relative flex items-start justify-between">
                <span className="text-sm font-medium tracking-widest text-indigo-400">
                  {number}
                </span>

                <span className="text-2xl text-gray-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-400">
                  ↗
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-12">
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {title}
                </h3>

                <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
                  {description}
                </p>
              </div>

              {/* Technologies */}

              <Pills
                data={technologies}
                variant="dark"
                className="gap-2 mt-5"
              />
            </Card>
          ))}
        </div>

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
