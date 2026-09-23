import Header from "./Header";
import Contributions from "./Contributions";
import { contributions } from "../model/about-data";
import Skills from "./Skills";
import AboutContent from "./AboutContent";
import SectionWrapper from "./SectionWrapper";

const About = () => {
  return (
    <SectionWrapper>
      <Header />
      <AboutContent />
      <Skills />
      <Contributions items={contributions.items} title={contributions.title} />
    </SectionWrapper>
  );
};

export default About;
