interface AboutMeProps {}

const AboutMe = ({}: AboutMeProps) => {
  return (
    <div>
      <p className="text-xl leading-9 text-gray-700">
        I'm a Senior Frontend Developer with 8+ years of experience building
        modern, responsive and production-ready web applications.
      </p>

      <p className="mt-6 text-base leading-8 text-gray-500">
        I specialize in React, Next.js and TypeScript, with a strong focus on
        creating reusable components, scalable frontend architecture and
        seamless user experiences. I enjoy turning complex requirements and
        designs into clean, maintainable and high-performing interfaces.
      </p>

      <p className="mt-6 text-base leading-8 text-gray-500">
        Over the years, I've worked across different products and environments,
        collaborating with designers, backend developers and product teams to
        turn ideas into reliable digital experiences.
      </p>
    </div>
  );
};

export default AboutMe;
