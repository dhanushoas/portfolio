import { data } from "@/lib/data"
import { Briefcase, FileDown } from "lucide-react"

export function Experience() {
  return (
    <div className="position-relative">
      <div className="position-absolute start-0 top-0 bottom-0 border-start border-1 border-secondary" style={{ left: '0', marginLeft: '-15px' }}></div>
      {data.workExperience.map((job, index) => (
        <div key={index} className="position-relative ps-4 mb-5">
          <div className="position-absolute start-0 top-0 translate-middle-x rounded-circle bg-white d-flex align-items-center justify-content-center border border-2 border-primary shadow-sm" style={{ width: '28px', height: '28px', marginLeft: '-15px', marginTop: '10px' }}>
            <Briefcase className="h-4 w-4 text-primary" style={{ width: '14px', height: '14px' }} />
          </div>
          <div className="ps-2">
            <span className="small text-muted text-uppercase tracking-wider fw-semibold italic">{job.period}</span>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start gap-2 mb-1 mt-1">
              <h3 className="h5 fw-bold font-headline mb-0">{job.role}</h3>
              {job.downloadUrl && (
                <a
                  href={job.downloadUrl}
                  download
                  className="btn btn-sm btn-outline-primary rounded-pill d-inline-flex align-items-center"
                  title="Download"
                >
                  <FileDown size={14} className="me-1" />
                  <span style={{ fontSize: '0.75rem' }}>Docs</span>
                </a>
              )}
            </div>
            <p className="text-secondary fw-medium mb-3">{job.company} <span className="text-muted mx-1">•</span> {job.location}</p>
            <ul className="list-unstyled mb-0">
              {job.tasks.map((task, i) => (
                <li key={i} className="mb-2 d-flex align-items-start">
                  <span className="text-primary me-2">•</span>
                  <span className="text-muted small">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
