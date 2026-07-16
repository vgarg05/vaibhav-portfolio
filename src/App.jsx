import BackgroundFX from "./components/BackgroundFX";
import BackToTop from "./components/BackToTop";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import CodingProfiles from "./sections/CodingProfiles";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Skills from "./sections/Skills";
import { useActiveSection } from "./hooks/useActiveSection";

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-ink text-slate-200">
      <LoadingScreen />
      <ScrollProgress />
      <BackgroundFX />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
