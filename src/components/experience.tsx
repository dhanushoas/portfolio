"use client"

import { useState } from "react"
import { data } from "@/lib/data"
import { Briefcase, FileDown, ChevronDown, ChevronUp } from "lucide-react"

export function Experience() {
  const [showAll, setShowAll] = useState(false)
  const displayedExperience = showAll ? data.workExperience : data.workExperience.slice(0, 2)

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-3 md:translate-x-0"></div>
        {displayedExperience.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-10 mb-12 last:mb-0">
            <div className="absolute left-0 top-1.5 -translate-x-6 md:-translate-x-3.5 h-6 w-6 rounded-full bg-background flex items-center justify-center border-2 border-primary">
              <Briefcase className="h-3 w-3 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">{job.period}</p>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
              <h3 className="font-semibold text-lg font-headline mt-1 flex-1">{job.role}</h3>
              {job.downloadUrl && (
                <a
                  href={job.downloadUrl}
                  download
                  className="p-2 rounded-full hover:bg-muted transition-colors text-primary shrink-0"
                  title="Download Certificate / Joining Letter"
                >
                  <FileDown className="h-5 w-5" />
                </a>
              )}
            </div>
            <p className="text-muted-foreground font-medium">{job.company} - {job.location}</p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground break-words">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {data.workExperience.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-10 flex items-center gap-2 text-primary hover:bg-primary/10 transition-colors font-medium border border-primary/30 px-6 py-2.5 rounded-full"
        >
          {showAll ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      )}
    </div>
  )
}
