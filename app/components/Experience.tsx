import SectionHeader from "./SectionHeader";
import Highlight from "./ui/Highlight";
import Pills from "./ui/Pills";

const Experience = () => {
  const experiences = [
    {
      period: "Apr 2021 — Apr 2025",
      role: "Senior Software Engineer",
      company: "e-zest solutions",
      location: "Pune",
      description:
        "Leading frontend development for modern web applications, focusing on scalable architecture, reusable components and high-quality responsive experiences.",
      achievements: [
        "Built and maintained production applications using React, Next.js and TypeScript.",
        "Designed reusable component patterns that improved consistency across multiple products.",
        "Collaborated closely with designers, backend developers and product teams.",
        "Focused on performance, responsive design and maintainable frontend architecture.",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      period: "Jul 2019 — Oct 2019",
      role: "Senior Software Engineer",
      company: "Prolim Solutions",
      location: "Bangalore",
      description:
        "Developed responsive web applications and interactive user interfaces while working closely with product and design teams.",
      achievements: [
        "Developed reusable React components for multiple application modules.",
        "Converted complex designs into responsive and accessible interfaces.",
        "Implemented application state management using Redux and Context API.",
        "Integrated frontend applications with REST APIs and backend services.",
      ],
      technologies: ["React", "JavaScript", "Redux", "Bootstrap", "CSS"],
    },
    {
      period: "Apr 2016 — Mar 2019",
      role: "Senior UI Developer",
      company: "LMS Solutions",
      location: "Indore",
      description:
        "Started my professional frontend journey building responsive websites and web applications while developing strong foundations in modern web technologies.",
      achievements: [
        "Built responsive websites using HTML, CSS and JavaScript.",
        "Developed reusable UI components and frontend layouts.",
        "Worked across desktop, tablet and mobile experiences.",
        "Collaborated with designers to implement pixel-accurate interfaces.",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
    {
      period: "Jan 2014 — Jun 2015",
      role: "UI Developer",
      company: "CXS Media",
      location: "Indore",
      description:
        "Started my professional frontend journey building responsive websites and web applications while developing strong foundations in modern web technologies.",
      achievements: [
        "Built responsive websites using HTML, CSS and JavaScript.",
        "Developed reusable UI components and frontend layouts.",
        "Worked across desktop, tablet and mobile experiences.",
        "Collaborated with designers to implement pixel-accurate interfaces.",
      ],
      technologies: [
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Responsive Design",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-950 py-24 text-white sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mb-16 max-w-3xl">
          <SectionHeader
            variant="dark"
            title="Experience"
            description={
              <>
                8+ years of{" "}
                <Highlight variant="dark">building for the web.</Highlight>
              </>
            }
          />

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            A journey focused on building thoughtful interfaces, solving complex
            frontend problems and continuously improving the way I build digital
            products.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute bottom-0 left-[7px] top-0 hidden w-px bg-gradient-to-b from-indigo-500 via-white/10 to-transparent md:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.period}-${experience.role}`}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-4 border-gray-950 bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.15)] md:block" />

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-white/[0.05] sm:p-9">
                  {/* Top */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-medium text-indigo-400">
                        {experience.period}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-gray-500">
                        {experience.company} -{" "}
                        <span className="text-indigo-400">
                          {experience.location}
                        </span>
                      </p>
                    </div>

                    <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-400 md:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {experience.achievements.map((achievement) => (
                      <div
                        key={achievement}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    <Pills
                      data={experience.technologies}
                      variant="dark"
                      className="gap-2"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Always learning
              </p>

              <p className="mt-2 text-lg font-medium text-gray-300">
                Exploring better ways to build, scale and ship great products.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400"
            >
              Let's work together
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
