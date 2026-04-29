import SectionHero from "../components/SectionHero";
import About from "./About";
import SectionExperience from "../components/SectionExperience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <SectionHero />
      <About />
      <SectionExperience />
      <Projects />
      <Contact />
    </>
  );
}
