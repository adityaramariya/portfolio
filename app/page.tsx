import About from "./coponents/About";
import Banner from "./coponents/Banner";
import Contact from "./coponents/Contact";
import Experience from "./coponents/Experience";
import Expertise from "./coponents/Expertise";
import Footer from "./coponents/Footer";
import Navbar from "./coponents/Navbar";
import Projects from "./coponents/Projects";
import TechStack from "./coponents/TechStack";
import WhyWorkWithMe from "./coponents/WhyWorkWithMe";

export default function Home() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}
