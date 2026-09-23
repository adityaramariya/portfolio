import AboutMe from "./AboutMe";
import Achievement from "./Achievement";

interface AboutContentProps {}

const AboutContent = ({}: AboutContentProps) => {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 mt-6">
      <AboutMe />
      <Achievement />
    </div>
  );
};

export default AboutContent;
