import { data } from "@/lib/data"
import { Briefcase, FileDown } from "lucide-react"

export function Experience() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border -translate-x-3 md:translate-x-0"></div>
      {data.workExperience.map((job, index) => (
        <div key={index} className="relative pl-8 md:pl-10 mb-12 last:mb-0">
          <div className="absolute left-0 top-1.5 -translate-x-6 md:-translate-x-3.5 h-6 w-6 rounded-full bg-background flex items-center justify-center border-2 border-primary">
            <Briefcase className="h-3 w-3 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">{job.period}</p>
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-semibold text-lg font-headline mt-1 flex-1">{job.role}</h3>
            {job.downloadUrl && (
              <a
                href={job.downloadUrl}
                download
                className="p-2 rounded-full hover:bg-muted transition-colors text-primary"
                title="Download Certificate / Joining Letter"
              >
                <FileDown className="h-5 w-5" />
              </a>
            )}
          </div>
          <p className="text-muted-foreground font-medium">{job.company} - {job.location}</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
            {job.tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
