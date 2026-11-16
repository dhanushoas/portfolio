"use client"

import React, { useEffect, useState } from 'react';
import { data } from '@/lib/data';
import { Button } from './ui/button';
import { Download, Github, Linkedin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggleButton } from './theme-toggle-button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#hero');

  // Scroll state + reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(window.scrollY > 10);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view
  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Close the mobile menu with Escape or when switching to desktop width
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen]);

  const github = data.socials.find((s) => s.name === 'GitHub')?.url;
  const linkedin = data.socials.find((s) => s.name === 'LinkedIn')?.url;
  const initials = data.name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "border-b bg-background/80 shadow-sm backdrop-blur-lg" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 font-headline text-lg font-bold tracking-tight">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm text-white shadow-md shadow-primary/30">
              {initials}
            </span>
            <span className="truncate">{data.name}</span>
          </Link>

          <nav aria-label="Sections" className="hidden items-center gap-1 text-sm font-medium lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  "relative rounded-full px-3 py-1.5 transition-colors",
                  active === link.href ? "bg-primary/10 text-primary dark:text-accent" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1">
            <div className="hidden items-center gap-1 md:flex">
              <Button variant="ghost" size="icon" asChild>
                <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="sm" className="ml-1 bg-gradient-to-r from-primary to-accent shadow-md shadow-primary/25 hover:opacity-95">
                <a href={data.resumeUrl} download="Dhanush_Kumar_T.pdf">
                  <Download className="mr-1.5 h-4 w-4" /> CV
                </a>
              </Button>
            </div>
            <ThemeToggleButton />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Reading progress */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-pink-500 transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

      {isMenuOpen && (
        <div id="mobile-nav" className="animate-in fade-in slide-in-from-top-2 border-t bg-background/95 backdrop-blur-lg duration-200 lg:hidden">
          <nav aria-label="Sections" className="container mx-auto grid max-w-5xl grid-cols-2 gap-2 px-4 py-4 sm:grid-cols-3 md:px-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                aria-current={active === link.href ? 'true' : undefined}
                className={cn(
                  "rounded-xl border px-4 py-3 text-center text-sm font-medium transition-colors",
                  active === link.href ? "border-primary/40 bg-primary/10 text-primary dark:text-accent" : "bg-card/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="container mx-auto flex max-w-5xl items-center justify-center gap-2 px-4 pb-4 md:hidden">
            <Button variant="outline" size="sm" asChild>
              <a href={github} target="_blank" rel="noreferrer">
                <Github className="mr-1.5 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-1.5 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button size="sm" asChild className="bg-gradient-to-r from-primary to-accent">
              <a href={data.resumeUrl} download="Dhanush_Kumar_T.pdf">
                <Download className="mr-1.5 h-4 w-4" /> CV
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
