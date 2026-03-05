import { data } from "@/lib/data";
import { Button } from "./ui/button";
import { Github, Gitlab, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top py-4">
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <p className="small text-muted mb-0 text-center text-sm-start">
          &copy; {currentYear} {data.name}. All rights reserved.
        </p>
        <div className="d-flex align-items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="btn btn-link text-body p-2">
            <a href={data.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="btn btn-link text-body p-2">
            <a href={data.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
