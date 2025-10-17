
"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const galleryImages = [
  PlaceHolderImages.find(p => p.id === 'college1'),
  PlaceHolderImages.find(p => p.id === 'college2'),
  PlaceHolderImages.find(p => p.id === 'college3'),
  PlaceHolderImages.find(p => p.id === 'college4'),
].filter(Boolean);

export function CollegeGallery() {
  return (
    <section id="college" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">College Gallery</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A few moments from Sri Indu College of Engineering and Technology.
            </p>
          </div>
        </div>
        <div className="py-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => image && (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer group overflow-hidden">
                          <CardContent className="p-0">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={800}
                              height={600}
                              className="w-full h-auto object-cover aspect-video transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 border-0">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            width={1200}
                            height={900}
                            className="w-full h-auto rounded-lg"
                          />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
