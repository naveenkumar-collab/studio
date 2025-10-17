
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Code, Edit, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useUser } from '@/firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useFirebaseApp } from '@/firebase';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const app = useFirebaseApp();

  const handleLogout = () => {
    if (app) {
      signOut(getAuth(app));
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-lg">Fresher Folio</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          {user && (
            <Button asChild variant="ghost" size="icon">
              <Link href="/edit">
                <Edit />
                <span className="sr-only">Edit Details</span>
              </Link>
            </Button>
          )}
          {user ? (
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut />
              <span className="sr-only">Logout</span>
            </Button>
          ) : (
            <Button asChild variant="ghost" size="icon">
              <Link href="/login">
                <LogIn />
                <span className="sr-only">Login</span>
              </Link>
            </Button>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for the portfolio.</SheetDescription>
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <Code className="h-6 w-6 text-accent" />
                  <span className="font-bold font-headline text-lg">Fresher Folio</span>
                </Link>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-accent"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
