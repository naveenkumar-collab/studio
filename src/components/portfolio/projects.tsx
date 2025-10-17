import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'project1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication.',
    image: PlaceHolderImages.find(p => p.id === 'project1'),
    liveUrl: '#',
    sourceUrl: '#',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 'project2',
    title: 'Task Management App',
    description: 'A responsive web application to help users organize and track their daily tasks efficiently.',
    image: PlaceHolderImages.find(p => p.id === 'project2'),
    liveUrl: '#',
    sourceUrl: '#',
    tags: ['React', 'Firebase', 'Vite', 'shadcn/ui'],
  },
  {
    id: 'project3',
    title: 'Portfolio Website V1',
    description: 'My first personal portfolio website built with plain HTML, CSS, and JavaScript.',
    image: PlaceHolderImages.find(p => p.id === 'project3'),
    liveUrl: '#',
    sourceUrl: '#',
tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I've worked on.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col">
              {project.image && (
                <div className="overflow-hidden">
                    <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    data-ai-hint={project.image.imageHint}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-4">
                <Button asChild variant="outline">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Source Code <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
