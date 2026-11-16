"use client"

import { useState } from "react"
import { data } from "@/lib/data"
import { Briefcase, CalendarDays, ChevronDown, ChevronUp, FileDown, MapPin } from "lucide-react"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

export function Experience() {
  const [showAll, setShowAll] = useState(false)
  const jobs = showAll ? data.workExperience : data.workExperience.slice(0, 2)

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
      <ol className="relative w-full">
        {/* Gradient timeline line */}
        <div aria-hidden="true" className="absolute bottom-2 left-4 top-2 w-0.5 rounded-full bg-gradient-to-b from-primary via-accent to-transparent md:left-5" />
        {jobs.map((job, index) => (
          <Reveal as="li" key={`${job.company}-${job.role}`} delay={index * 80} className="relative mb-8 pl-12 last:mb-0 md:pl-16">
            {/* Node */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/20 md:left-5 md:h-10 md:w-10",
                index === 0 && "ring-4 ring-primary/15",
              )}
            >
              <Briefcase className="h-3.5 w-3.5 text-primary md:h-4 md:w-4 dark:text-accent" />
            </span>

            <article className="glass-card glass-card-hover p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:text-sm">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 font-medium text-primary dark:text-accent">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </span>
                  </div>
                  <h3 className="mt-2 font-headline text-lg font-semibold sm:text-xl">{job.role}</h3>
                  <p className="font-medium text-muted-foreground">{job.company}</p>
                </div>
                {job.downloadUrl && (
                  <a
                    href={job.downloadUrl}
                    download
                    className="shrink-0 rounded-full p-2 text-primary transition-colors hover:bg-primary/10 dark:text-accent"
                    title="Download certificate / joining letter"
                    aria-label={`Download document for ${job.role} at ${job.company}`}
                  >
                    <FileDown className="h-5 w-5" />
                  </a>
                )}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
                {job.tasks.map((task, i) => (
                  <li key={i} className="flex gap-2.5 break-words">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>

      {data.workExperience.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          aria-expanded={showAll}
          className="mt-10 flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-6 py-2.5 font-medium text-primary backdrop-blur transition-colors hover:bg-primary/10 dark:text-accent"
        >
          {showAll ? (
            <>
              Show less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show {data.workExperience.length - 2} more <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  )
}
