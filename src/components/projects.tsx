"use client"
import { useState } from "react";
import Image from 'next/image';
import { data } from "@/lib/data";
import { ArrowUpRight, Briefcase, Github, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";
import placeholderImages from '@/lib/placeholder-images.json';

type Project = { name: string; description: string; tech: string[]; liveDemo?: string; codeLink?: string; image?: string; kind: 'Professional' | 'Personal' };

export function Projects() {
  const allProjects: Project[] = [
    ...data.projects.map((p) => ({ ...p, kind: 'Professional' as const })),
    ...data.personalProjects.map((p) => ({ ...p, kind: 'Personal' as const })),
  ];
  const allTech = ["All", ...Array.from(new Set(allProjects.flatMap((p) => p.tech)))];
  const [filter, setFilter] = useState("All");
  const shown = filter === 'All' ? allProjects : allProjects.filter((p) => p.tech.includes(filter));

  return (
    <div>
      {/* Filter chips – scroll sideways on small screens */}
      <div role="toolbar" aria-label="Filter projects by technology" className="no-scrollbar -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {allTech.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => setFilter(tech)}
            aria-pressed={filter === tech}
            className={cn(
              "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
              filter === tech
                ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-md shadow-primary/25"
                : "bg-card/70 text-muted-foreground backdrop-blur hover:border-primary/40 hover:text-foreground",
            )}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {shown.map((project, index) => {
          const img = project.image ? placeholderImages.placeholderImages.find((p) => p.id === project.image) : undefined;
          return (
            <Reveal key={project.name} delay={(index % 2) * 90} className="h-full">
              <article className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden">
                {/* Screenshot */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  {img ? (
                    <Image
                      src={img.imageUrl}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      data-ai-hint={img.imageHint}
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-pink-500/20" />
                  )}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                  <span
                    className={cn(
                      "absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold shadow-md backdrop-blur",
                      project.kind === 'Professional' ? "bg-primary/90 text-white" : "bg-white/90 text-gray-900",
                    )}
                  >
                    {project.kind === 'Professional' ? <Briefcase className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                    {project.kind}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="font-headline text-xl font-semibold leading-snug">{project.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {project.tech.map((t) => (
                      <li key={t} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary dark:text-accent">{t}</li>
                    ))}
                  </ul>
                  <p className="mt-4 flex-1 break-words text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    {project.liveDemo && (
                      <Button asChild size="sm" className="bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/20 hover:opacity-95">
                        <a href={project.liveDemo} target="_blank" rel="noreferrer">
                          Live site <ArrowUpRight className="ml-1.5 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.codeLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.codeLink} target="_blank" rel="noreferrer">
                          <Github className="mr-1.5 h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
