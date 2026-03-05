import { data } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Skills() {
  return (
    <div className="row g-4">
      {data.skills.map((skillCategory) => (
        <div key={skillCategory.category} className="col-12 col-md-6 col-lg-4">
          <Card className="h-100 shadow-sm border-0 hover-lift">
            <CardHeader className="pb-2">
              <CardTitle className="font-headline h5 fw-bold text-primary">{skillCategory.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="d-flex flex-wrap gap-2">
                {skillCategory.technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="secondary"
                    className="badge rounded-pill bg-light text-dark border py-2 px-3 fw-normal"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <div className="d-flex align-items-center">
                      {tech.icon && <tech.icon className="me-2" width={16} height={16} />}
                      {tech.name}
                    </div>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
