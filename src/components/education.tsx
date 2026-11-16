import { data } from "@/lib/data";
import { Award, FileDown, GraduationCap, type LucideIcon } from "lucide-react";
import { Reveal } from "./reveal";

type Item = { title: string; place: string; period: string; extra?: string; downloadUrl?: string };

function Column({ title, Icon, items }: { title: string; Icon: LucideIcon; items: Item[] }) {
  return (
    <div className="glass-card h-full p-5 sm:p-6">
      <h3 className="mb-6 flex items-center gap-3 font-headline text-lg font-semibold sm:text-xl">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-md shadow-primary/25">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {title}
      </h3>
      <ol className="relative space-y-6 border-l-2 border-primary/20 pl-6">
        {items.map((it) => (
          <li key={it.title} className="relative">
            <span aria-hidden="true" className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent ring-4 ring-primary/10" />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-primary dark:text-accent">{it.period}</p>
                <h4 className="mt-0.5 font-semibold leading-snug">{it.title}</h4>
                <p className="text-sm text-muted-foreground">{it.place}</p>
                {it.extra && <p className="mt-1 text-sm text-muted-foreground">{it.extra}</p>}
              </div>
              {it.downloadUrl && (
                <a
                  href={it.downloadUrl}
                  download
                  className="shrink-0 rounded-full p-2 text-primary transition-colors hover:bg-primary/10 dark:text-accent"
                  title="Download certificate"
                  aria-label={`Download certificate: ${it.title}`}
                >
                  <FileDown className="h-5 w-5" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Education() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal className="h-full">
        <Column
          title="Academic history"
          Icon={GraduationCap}
          items={data.education.map((e) => ({ title: e.degree, place: e.institution, period: e.period, extra: e.grade, downloadUrl: e.downloadUrl }))}
        />
      </Reveal>
      <Reveal delay={90} className="h-full">
        <Column
          title="Certifications"
          Icon={Award}
          items={data.certifications.map((c) => ({ title: c.name, place: c.institution, period: c.period, downloadUrl: c.downloadUrl }))}
        />
      </Reveal>
    </div>
  );
}
