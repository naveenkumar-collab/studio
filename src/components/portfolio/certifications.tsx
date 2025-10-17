
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const certifications = [
  {
    id: 'cert1',
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    image: PlaceHolderImages.find(p => p.id === 'cert1'),
  },
  {
    id: 'cert2',
    title: 'Web Developer Bootcamp',
    issuer: 'Coursera',
    image: PlaceHolderImages.find(p => p.id === 'cert2'),
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Certifications</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My commitment to continuous learning.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
          {certifications.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer group overflow-hidden">
                    <div className="overflow-hidden">
                        {cert.image && (
                            <Image
                            src={cert.image.imageUrl}
                            alt={cert.title}
                            data-ai-hint={cert.image.imageHint}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                        )}
                    </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-0">
                <DialogTitle className="sr-only">{cert.title}</DialogTitle>
                <DialogDescription className="sr-only">A larger view of the {cert.title} certificate from {cert.issuer}.</DialogDescription>
                {cert.image && (
                  <Image
                    src={cert.image.imageUrl}
                    alt={cert.title}
                    data-ai-hint={cert.image.imageHint}
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-lg"
                  />
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
