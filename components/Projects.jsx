import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselProject() {
  return (
    <section className='h-screen p-20 bg-neutral-100'>
      <h2 className='text-2xl font-bold m-auto text-center pb-2'>Projects</h2>
      <p className='text-center pb-12'>
        Here you will find some of the personal projects that i have worked on
      </p>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full px-2 max-w-7xl m-auto'
      >
        <CarouselContent>
          {projects.map(project => (
            <CarouselItem key={project.title} className='md:basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardHeader>
                    <Image
                      src='/card-placeholder.jpg'
                      alt='project'
                      width={140}
                      height={140}
                      className='w-full aspect-square object-cover '
                    />
                    <h3 className='font-bold'>{project.title}</h3>
                  </CardHeader>
                  <CardContent className='flex flex-col items-center justify-center p-6'>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem
                    </p>
                    <div>
                      <Button>
                        <Link href={project.link} target='_blank'>
                          Code
                        </Link>
                      </Button>
                      <Button>
                        <Link href={project.link} target='_blank'>
                          Live
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default CarouselProject;

const projects = [
  {
    title: 'Little Lemon Website',
    description: 'project 1',
    link: 'https://github.com/Manjil-Thapa/little-lemon-capstone',
  },
  {
    title: 'YelpCamp',
    description: 'project 2',
    link: 'https://github.com/Manjil-Thapa/yelpcamp',
  },
  {
    title: 'Mangata-Gallo Webpage',
    description: 'project 3',
    link: 'https://github.com/Manjil-Thapa/mangata-gallo-web-page',
  },
  {
    title: 'Etch-A-Sketch',
    description: 'project 4',
    link: 'https://github.com/Manjil-Thapa/odin-Etch-A-Sketch',
  },
  {
    title: 'Contentlayer Blog',
    description: 'project 5',
    link: 'https://github.com/Manjil-Thapa/Nextjs-contentlayer-blog',
  },
];
