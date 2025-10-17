
'use client';

import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Download, ArrowRight, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { type Student } from '@/lib/student-data';
import type { User } from 'firebase/auth';

const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar');

type HeroProps = {
  student: Student;
  user: User | null;
};

export function Hero({ student, user }: HeroProps) {
  const contactDetails = [
    { icon: Mail, value: student.contact.email, href: `mailto:${student.contact.email}` },
    { icon: Phone, value: student.contact.tel, href: `tel:${student.contact.tel}` },
    { icon: Github, value: student.contact.social.github.replace('https://', ''), href: student.contact.social.github, target: '_blank' },
    { icon: Linkedin, value: student.contact.social.linkedin.replace('https://www.', ''), href: student.contact.social.linkedin, target: '_blank' },
  ];

  const profilePictureUrl = user?.photoURL || avatarImage?.imageUrl;
  const profilePictureAlt = user?.displayName ? `Profile picture of ${user.displayName}` : avatarImage?.description || 'Avatar';

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            {profilePictureUrl && (
              <Image
                src={profilePictureUrl}
                alt={profilePictureAlt}
                data-ai-hint={avatarImage?.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square shadow-lg border-4 border-primary"
              />
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                {student.name}
              </h1>
              <p className="text-xl font-medium text-accent">{student.title}</p>
              <div className="flex items-center gap-3 text-lg">
                <School className="h-5 w-5 flex-shrink-0" />
                <span>{student.college}</span>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                {student.bio}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetails.map((detail) => (
                <a key={detail.value} href={detail.href} target={detail.target} rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-accent transition-colors">
                  <detail.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="truncate">{detail.value}</span>
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-6">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={student.resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
               <Button asChild size="lg" variant="outline">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
