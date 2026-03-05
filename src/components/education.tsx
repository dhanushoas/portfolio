import { data } from "@/lib/data";
import { GraduationCap, FileDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Education() {
  return (
    <div className="d-flex flex-column gap-4">
      <Card className="shadow-sm border-0">
        <CardHeader className="pb-3">
          <CardTitle className="font-headline h5 fw-bold d-flex align-items-center gap-2 mb-0">
            <GraduationCap className="text-primary" size={20} />
            Academic History
          </CardTitle>
        </CardHeader>
        <CardContent className="d-flex flex-column gap-4">
          {data.education.map((edu, index) => (
            <div key={index} className="d-flex justify-content-between align-items-start gap-3">
              <div className="flex-grow-1">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-baseline gap-1">
                  <h3 className="h6 fw-bold mb-0">{edu.degree}</h3>
                  <p className="small text-muted text-nowrap mb-0">{edu.period}</p>
                </div>
                <p className="text-secondary mb-1">{edu.institution}</p>
                <p className="small text-muted mb-0">{edu.grade}</p>
              </div>
              {edu.downloadUrl && (
                <a
                  href={edu.downloadUrl}
                  download
                  className="btn btn-sm btn-light rounded-circle flex-shrink-0 text-primary d-flex align-items-center justify-content-center"
                  style={{ width: '36px', height: '36px' }}
                  title="Download Certificate"
                >
                  <FileDown size={18} />
                </a>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-sm border-0">
        <CardHeader className="pb-3">
          <CardTitle className="font-headline h5 fw-bold d-flex align-items-center gap-2 mb-0">
            <GraduationCap className="text-primary" size={20} />
            Certifications
          </CardTitle>
        </CardHeader>
        <CardContent className="d-flex flex-column gap-4">
          {data.certifications.map((cert, index) => (
            <div key={index} className="d-flex justify-content-between align-items-start gap-3">
              <div className="flex-grow-1">
                <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-baseline gap-1">
                  <h3 className="h6 fw-bold mb-0">{cert.name}</h3>
                  <p className="small text-muted text-nowrap text-sm-end mb-0">{cert.period}</p>
                </div>
                <p className="text-secondary mb-0">{cert.institution}</p>
              </div>
              {cert.downloadUrl && (
                <a
                  href={cert.downloadUrl}
                  download
                  className="btn btn-sm btn-light rounded-circle flex-shrink-0 text-primary d-flex align-items-center justify-content-center"
                  style={{ width: '36px', height: '36px' }}
                  title="Download Certificate"
                >
                  <FileDown size={18} />
                </a>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
