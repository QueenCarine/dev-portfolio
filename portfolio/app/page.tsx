import Navbar from "./components/Navbar/page";
import Hero from "./components/Home/page";
import Education from "./components/Eucation/page";
import Projects from "./components/Projects/page";
import Skills from "./components/Skills/page";
import Contact from "./components/Contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      {/* subtle background texture */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(62,207,142,0.08),_transparent_45%)]" />
      <Navbar />
      <Hero />
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}