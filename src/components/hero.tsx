import Image from 'next/image';
import { data } from '@/lib/data';
import { ArrowDown, Download, FolderKanban, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Angular, Java, ReactJs, Spring } from './icons';
import { RotatingText } from './rotating-text';
import placeholderImages from '@/lib/placeholder-images.json';

const profilePic = placeholderImages.placeholderImages.find((p) => p.id === 'profile-picture');

const STACK_WORDS = ['Angular', 'Java 21 & Spring Boot', 'React', 'Microservices', 'Node.js'];

/** Tech badges that float around the profile photo. */
const ORBIT = [
  { Icon: Angular, label: 'Angular', pos: 'left-0 top-6 sm:-left-4', delay: '0s' },
  { Icon: Java, label: 'Java', pos: '-right-1 top-2 sm:-right-5', delay: '-1.5s' },
  { Icon: ReactJs, label: 'React', pos: '-left-2 bottom-8 sm:-left-6', delay: '-3s' },
  { Icon: Spring, label: 'Spring Boot', pos: 'right-0 bottom-3 sm:-right-3', delay: '-4.5s' },
];

export function Hero() {
  const projectCount = data.projects.length + data.personalProjects.length;
  const techCount = data.skills.reduce((n, s) => n + s.technologies.length, 0);
  const stats = [
    { value: '3+', label: 'Years experience' },
    { value: `${projectCount}`, label: 'Projects shipped' },
    { value: `${techCount}+`, label: 'Tools & technologies' },
  ];

  return (
    <div className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
        {/* Text */}
        <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
          <p className="animate-in fade-in slide-in-from-bottom-2 inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur duration-700 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {data.title} · {data.location}
          </p>

          <h1 className="animate-in fade-in slide-in-from-bottom-4 font-headline font-bold tracking-tighter duration-700">
            <span className="block text-2xl text-muted-foreground sm:text-3xl">Hi, I&apos;m</span>
            <span className="text-gradient animate-gradient-pan mt-1 block text-[2.6rem] leading-[1.05] sm:whitespace-nowrap sm:text-6xl lg:text-[4.25rem]">
              {data.name}
            </span>
          </h1>

          <p className="animate-in fade-in slide-in-from-bottom-4 text-lg text-muted-foreground delay-150 duration-700 sm:text-xl">
            I build secure, scalable web apps with <RotatingText words={STACK_WORDS} />
          </p>

          <p className="mx-auto max-w-prose leading-relaxed text-muted-foreground lg:mx-0">{data.summary}</p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] hover:opacity-95">
              <a href={data.resumeUrl} download="Dhanush_Kumar_T.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/60 backdrop-blur">
              <a href="#projects">
                <FolderKanban className="mr-2 h-4 w-4" />
                View projects
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={`mailto:${data.email}`}>
                <Send className="mr-2 h-4 w-4" />
                Contact me
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            <a href={`mailto:${data.email}`} className="flex min-w-0 items-center gap-2 py-2 hover:text-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary dark:text-accent" />
              <span className="break-all">{data.email}</span>
            </a>
            <a href={`tel:${data.mobile}`} className="flex items-center gap-2 whitespace-nowrap py-2 hover:text-foreground">
              <Phone className="h-4 w-4 shrink-0 text-primary dark:text-accent" />
              {data.mobile}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary dark:text-accent" />
              {data.location}
            </span>
          </div>

          {/* Quick stats */}
          <dl className="mx-auto grid max-w-md grid-cols-3 gap-3 pt-2 lg:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="glass-card px-2 py-3 text-center sm:px-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-headline text-2xl font-bold text-gradient sm:text-3xl">{s.value}</dd>
                <dd className="mt-0.5 text-[11px] leading-tight text-muted-foreground sm:text-xs">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo with animated ring and floating tech badges */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative h-56 w-56 sm:h-72 sm:w-72">
            <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-gradient-to-tr from-primary/30 via-accent/20 to-pink-500/20 blur-2xl" />
            <div
              aria-hidden="true"
              className="animate-spin-slow absolute -inset-1.5 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), #ec4899, hsl(var(--primary)))' }}
            />
            <div className="absolute inset-0 overflow-hidden rounded-full border-4 border-background bg-muted shadow-2xl">
              {profilePic && (
                <Image
                  src={profilePic.imageUrl}
                  alt={data.name}
                  fill
                  priority
                  quality={90}
                  data-ai-hint={profilePic.imageHint}
                  className="object-cover"
                  sizes="(max-width: 640px) 224px, 288px"
                />
              )}
            </div>
            {ORBIT.map(({ Icon, label, pos, delay }) => (
              <span
                key={label}
                title={label}
                className={`animate-float absolute ${pos} flex h-11 w-11 items-center justify-center rounded-2xl border bg-card/90 shadow-lg backdrop-blur sm:h-14 sm:w-14`}
                style={{ animationDelay: delay }}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                <span className="sr-only">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#experience"
        className="mx-auto mt-14 hidden w-fit flex-col items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </div>
  );
}
