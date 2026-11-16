import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Footer } from '@/components/footer';
import { Backdrop } from '@/components/backdrop';
import { SectionHeading } from '@/components/section-heading';

export default function Home() {
  const sectionGap = "py-16 lg:py-24";
  return (
    <div className="relative text-foreground">
      <Backdrop />
      <Header />
      <main className="container mx-auto max-w-5xl px-4 md:px-8">
        <section id="hero" className="pt-28 lg:pt-36">
          <Hero />
        </section>
        <section id="experience" className={sectionGap}>
          <SectionHeading index="01" eyebrow="Career" title="Work Experience" subtitle="Where I've worked and what I've delivered." />
          <Experience />
        </section>
        <section id="skills" className={sectionGap}>
          <SectionHeading index="02" eyebrow="Toolbox" title="Key Skills" subtitle="Languages, frameworks and tools I use every day." />
          <Skills />
        </section>
        <section id="projects" className={sectionGap}>
          <SectionHeading index="03" eyebrow="Portfolio" title="Projects" subtitle="Government, enterprise and personal projects – filter by technology." />
          <Projects />
        </section>
        <section id="education" className={sectionGap}>
          <SectionHeading index="04" eyebrow="Learning" title="Education & Certifications" />
          <Education />
        </section>
      </main>
      <Footer />
    </div>
  );
}
