"use client"
import { useState } from "react";
import Image from 'next/image';
import { data } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";
import placeholderImages from '@/lib/placeholder-images.json';


export function Projects() {
  const allProjects = [...data.projects, ...data.personalProjects];
  const allTech = ["All", ...Array.from(new Set(allProjects.flatMap(p => p.tech)))];

  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === 'All'
    ? allProjects
    : allProjects.filter(p => p.tech.includes(filter));

  return (
    <div className="container-fluid px-0">
      <div className="d-flex justify-content-center mb-5">
        <div style={{ width: '250px' }}>
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-100 shadow-sm border-primary border-opacity-25">
              <SelectValue placeholder="Filter by technology" />
            </SelectTrigger>
            <SelectContent>
              {allTech.map(tech => (
                <SelectItem key={tech} value={tech}>{tech}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="row g-4">
        {filteredProjects.map((project: any, index) => {
          const projectImage = 'image' in project ? placeholderImages.placeholderImages.find(p => p.id === project.image) : undefined;
          return (
            <div key={index} className="col-12 col-md-6">
              <Card className="h-100 d-flex flex-column group hover-primary-border transition-all shadow-sm overflow-hidden border-0 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="font-headline h4 fw-bold">{project.name}</CardTitle>
                  <div className="d-flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t: string) => (
                      <Badge key={t} variant="secondary" className="badge bg-light text-primary border border-primary border-opacity-10 fw-normal">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow-1 d-flex flex-column gap-3">
                  {projectImage && (
                    <div className="position-relative w-100 rounded-3 overflow-hidden d-md-none" style={{ height: '200px' }}>
                      <Image
                        src={projectImage.imageUrl}
                        alt={project.name}
                        fill
                        data-ai-hint={projectImage.imageHint}
                        className="object-fit-cover shadow-sm"
                      />
                    </div>
                  )}
                  <div className="position-relative flex-grow-1">
                    <p className="text-secondary opacity-75 mb-0" style={{ transition: 'opacity 0.3s' }}>
                      {project.description}
                    </p>
                    {projectImage && (
                      <div className="d-none d-md-block position-absolute inset-0 top-0 start-0 w-100 h-100 opacity-0 group-hover-opacity-100" style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}>
                        <Image
                          src={projectImage.imageUrl}
                          alt={project.name}
                          fill
                          data-ai-hint={projectImage.imageHint}
                          className="object-fit-cover rounded-3 shadow-sm"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="bg-transparent border-0 pt-0 pb-4">
                  <div className="d-flex align-items-center gap-3">
                    {'liveDemo' in project && project.liveDemo && (
                      <Button variant="outline" asChild className="btn btn-outline-primary border-2 fw-semibold px-3">
                        <a href={project.liveDemo} target="_blank" rel="noreferrer">
                          Live Demo <ArrowUpRight className="ms-2" size={16} />
                        </a>
                      </Button>
                    )}
                    {'codeLink' in project && project.codeLink && (
                      <Button variant="ghost" asChild className="btn btn-link text-decoration-none text-secondary">
                        <a href={project.codeLink} target="_blank" rel="noreferrer">
                          <Github className="me-2" size={16} /> View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}