import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';

export default function Home() {
  const sectionGap = "py-16 lg:py-24";
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container py-5">
        <div id="hero" className="py-5 mt-5">
          <Hero />
        </div>
        <div id="experience" className="py-5">
          <h2 className="display-6 fw-bold text-center mb-5 font-headline">Work Experience</h2>
          <Experience />
        </div>
        <div id="skills" className="py-5">
          <h2 className="display-6 fw-bold text-center mb-5 font-headline">Key Skills</h2>
          <Skills />
        </div>
        <div id="projects" className="py-5">
          <h2 className="display-6 fw-bold text-center mb-5 font-headline">Projects</h2>
          <Projects />
        </div>
        <div id="education" className="py-5">
          <h2 className="display-6 fw-bold text-center mb-5 font-headline">Education & Certifications</h2>
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
}
