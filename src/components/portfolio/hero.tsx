import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const avatarImage = PlaceHolderImages.find(p => p.id === 'avatar');

export function Hero() {
  const contactDetails = [
    { icon: Mail, value: 'alex.doe@email.com', href: 'mailto:alex.doe@email.com' },
    { icon: Phone, value: '+1 234 567 890', href: 'tel:+1234567890' },
    { icon: Github, value: 'github.com/alexdoe', href: 'https://github.com/alexdoe', target: '_blank' },
    { icon: Linkedin, value: 'linkedin.com/in/alexdoe', href: 'https://linkedin.com/in/alexdoe', target: '_blank' },
  ];

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            {avatarImage && (
              <Image
                src={avatarImage.imageUrl}
                alt={avatarImage.description}
                data-ai-hint={avatarImage.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square shadow-lg border-4 border-primary"
              />
            )}
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Alex Doe
              </h1>
              <p className="text-xl font-medium text-accent">Aspiring Web Developer</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A passionate and creative developer with a knack for building beautiful and functional web applications. Eager to learn and contribute to a forward-thinking team.
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
                <a href="/alex-doe-resume.pdf" download>
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
