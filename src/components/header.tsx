"use client"

import React, { useState, useEffect } from 'react';
import { data } from '@/lib/data';
import { Button } from './ui/button';
import { Github, Gitlab, Linkedin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggleButton } from './theme-toggle-button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'About', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  }

  return (
    <header className={cn(
      "fixed-top transition-all duration-300",
      isScrolled ? "bg-body shadow-sm border-bottom backdrop-blur-md" : "bg-transparent border-bottom border-transparent"
    )}>
      <div className="container py-2">
        <div className="d-flex align-items-center justify-content-between" style={{ height: '60px' }}>
          <Link href="/" className="font-headline h4 mb-0 fw-bold text-decoration-none text-body">
            {data.name}
          </Link>
          <nav className="d-none d-md-flex align-items-center gap-4 fw-medium">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-secondary text-decoration-none hover-body transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="d-flex align-items-center gap-2">
            <div className="d-none d-md-flex align-items-center gap-2">
              <Button variant="ghost" size="icon" asChild className="btn btn-link text-body p-2">
                <a href={data.socials.find(s => s.name === 'GitHub')?.url} target="_blank" rel="noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="btn btn-link text-body p-2">
                <a href={data.socials.find(s => s.name === 'LinkedIn')?.url} target="_blank" rel="noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>
            <ThemeToggleButton />
            <Button variant="ghost" size="icon" className="d-md-none btn btn-link text-body p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <span className="visually-hidden">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="d-md-none bg-body shadow-sm border-bottom pb-3">
          <nav className="d-flex flex-column align-items-center gap-3 px-3 pt-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={handleLinkClick} className="text-secondary text-decoration-none hover-body w-100 text-center py-2 rounded-2 hover-bg-light transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
