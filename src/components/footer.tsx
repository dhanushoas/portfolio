import { data } from "@/lib/data";
import { Button } from "./ui/button";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const github = data.socials.find((s) => s.name === 'GitHub')?.url;
  const linkedin = data.socials.find((s) => s.name === 'LinkedIn')?.url;

  return (
    <footer id="contact" className="relative mt-8 scroll-mt-24">
      {/* Call to action */}
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[hsl(280_90%_40%)] to-accent p-8 text-center text-white shadow-2xl shadow-primary/30 sm:p-12">
            <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div aria-hidden="true" className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-pink-400/20 blur-2xl" />
            <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="relative">
              <h2 className="font-headline text-2xl font-bold tracking-tight sm:text-4xl">Let&apos;s build something together</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                Have a project or role in mind? Get in touch – I work across Angular, React, Java and Spring Boot.
              </p>
              <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href={`mailto:${data.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Email me
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  <a href={`tel:${data.mobile}`}>
                    <Phone className="mr-2 h-4 w-4" /> {data.mobile}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                  <a href={data.resumeUrl} download="Dhanush_Kumar_T.pdf">
                    <Download className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 border-t bg-background/60 backdrop-blur">
        <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-8">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            &copy; {currentYear} {data.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild>
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
