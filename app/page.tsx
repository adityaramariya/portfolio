import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WhyWorkWithMe from "./components/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <main className="">
        <Banner />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
        <WhyWorkWithMe />
      </main>
    </>
  );
}
