// import About from "@/src/widgets/about/ui/About";
import { AboutSection } from "@/widgets/about";
import { HeroSection } from "@/widgets/hero/";
import { ContactSection } from "@/widgets/contact";
import { ExperienceSection } from "@/widgets/experience";
import { ExpertiseSection } from "@/widgets/expertise";
import { ProjectsSection } from "@/widgets/projects";
import { TechStackSection } from "@/widgets/tech-stack";
import { WhyWorkWithMeSection } from "@/widgets/why-work-with-us";

export default async function Home() {
  return (
    <>
      <main className="">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <ContactSection />
        <WhyWorkWithMeSection />
      </main>
    </>
  );
}
