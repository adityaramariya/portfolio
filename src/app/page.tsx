// import Home from "../pages/home/ui/HomePage";

// export default function Page() {
//   return <Home />;
// }

import About from "@/src/widgets/about/ui/About";
import Banner from "@/src/widgets/hero/ui/Banner";
import Contact from "@/src/widgets/contact/ui/Contact";
import Experience from "@/src/widgets/experience/ui/Experience";
import Expertise from "@/src/widgets/expertise/ui/Expertise";
import Projects from "@/src/widgets/projects/ui/Projects";
import TechStack from "@/src/widgets/tech-stack/ui/TechStack";
import WhyWorkWithMe from "@/src/widgets/why-work-with-us/ui/WhyWorkWithMe";

export default async function Home() {
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
