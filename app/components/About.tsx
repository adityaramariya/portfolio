import { pills } from "@/data";
import Pills from "./ui/Pills";
import SectionHeader from "./SectionHeader";
import Highlight from "./ui/Highlight";

const achievements = [
  {
    id: 1,
    count: "8+",
    description: "years of experience",
  },
  {
    id: 2,
    count: "20+",
    description: "projects delivered",
  },
  {
    id: 3,
    count: "100%",
    description: "responsive approach",
  },
  {
    id: 4,
    count: "UI",
    description: "Focused Development",
  },
];

const Achievement = () => {
  return (
    <div className="grid grid-cols-2 gap-4 self-start">
      {achievements.map((achievement: any) => (
        <div
          key={achievement.id}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-4xl font-bold tracking-tight text-gray-950">
            {achievement.count}
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {achievement.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const professionalContributions = {
  title: "professional contributions",
  items: [
    {
      id: 1,
      title: "Clean & reusable architecture ",
      description:
        "Built reusable & component driven interfaces, and common UI patterns with attention to maintainability and consistency.",
    },
    {
      id: 2,
      title: "Responsive web development",
      description:
        " Translated designs and requirements into layouts for desktop, tablet, and mobile using HTML/CSS, bootstrap, flexbox, and CSS grid.",
    },
    {
      id: 3,
      title: "API & application integration",
      description:
        "Worked with API-driven interfaces for authentication, registration, filtering, serarch, mapping, device compatibility and data driven workflows",
    },
    {
      id: 4,
      title: "State & access management",
      description:
        "worked with react-redux, redux, context API, reducers and RBAC to support application state and user permission.",
    },
    {
      id: 5,
      title: "Performance focused",
      description:
        "Fast, accessible and optimized experiences without compromising visual quality.",
    },
  ],
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mt-20 ">{children}</div>;
};
const Title = ({ title }: any) => (
  <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900 pb-3 border-b border-gray-200 ">
    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
      {title}
    </span>{" "}
  </h4>
);

const ContributionsSection = ({
  items,
  title,
}: {
  items: any[];
  title: string;
}) => {
  return (
    <Container>
      <Title title={title} />
      <div className="grid gap-6 md:grid-cols-3 mt-8">
        {items.map(
          ({
            id,
            title,
            description,
          }: {
            id: number;
            title: string;
            description: string;
          }) => (
            <div key={id}>
              <h3 className="font-semibold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
              </p>
            </div>
          ),
        )}
      </div>
    </Container>
  );
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-gray-950 sm:py-32"
    >
      <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          description={
            <>
              I don't just build interfaces. <br />I build{" "}
              <Highlight>frontend experiences</Highlight> <br />
              that scale
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 mt-6">
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
          </div>

          <Achievement />
        </div>
        <Pills data={pills} className="mt-10 gap-2" />
        <ContributionsSection
          items={professionalContributions.items}
          title={professionalContributions.title}
        />
      </div>
    </section>
  );
};

export default About;
