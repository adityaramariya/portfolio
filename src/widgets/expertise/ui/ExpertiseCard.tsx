import Card from "@/shared/ui/card/card";
import Pills from "@/shared/ui/Pills";

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

const ExpertiseCard = () => {
  return (
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

          <Pills data={technologies} variant="dark" className="gap-2 mt-5" />
        </Card>
      ))}
    </div>
  );
};

export default ExpertiseCard;
