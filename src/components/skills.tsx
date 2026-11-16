import { data } from "@/lib/data";
import { Code2, Database, LayoutTemplate, Server, Workflow, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";

const CATEGORY_ICON: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Frontend Technologies": LayoutTemplate,
  "Backend Technologies": Server,
  "Databases": Database,
  "Tools & Platforms": Wrench,
  "Methodologies & Others": Workflow,
};

export function Skills() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {data.skills.map((group, index) => {
        const Icon = CATEGORY_ICON[group.category] ?? Code2;
        return (
          <Reveal key={group.category} delay={(index % 3) * 90} className="h-full">
            <div className="glass-card glass-card-hover group relative h-full overflow-hidden p-5 sm:p-6">
              {/* Gradient top edge that lights up on hover */}
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-pink-500 opacity-40 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/25">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-headline text-lg font-semibold leading-tight">{group.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-full border bg-background/70 px-3 py-1 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-primary/5"
                  >
                    {tech.icon && <tech.icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
