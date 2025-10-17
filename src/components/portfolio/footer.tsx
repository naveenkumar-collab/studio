"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Code } from 'lucide-react';
import { student } from '@/lib/student-data';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-6 md:px-8 md:py-12 bg-card">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-accent" />
          <span className="font-bold font-headline text-lg">Fresher Folio</span>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          &copy; {year} {student.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href={student.contact.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
          </Link>
          <Link href={student.contact.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
          </Link>
          <Link href={`mailto:${student.contact.email}`} aria-label="Email">
            <Mail className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
