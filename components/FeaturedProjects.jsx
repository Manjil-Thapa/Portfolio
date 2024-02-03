import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { featuredProjects } from '@/featuredProjects';
import { Badge } from './ui/badge';

const FeaturedProjects = () => {
  return (
    <section className='max-w-screen-xl m-auto p-20' id='projects'>
      <div>
        <h2 className='text-center pb-8 text-3xl font-bold'>Featured Projects</h2>
        <div className='grid grid-rows-4 gap-20'>
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 gap-x-4 ${
                index % 2 === 0 ? 'even' : 'odd'
              }`}
            >
              <AspectRatio
                ratio={16 / 9}
                className={index % 2 !== 0 ? 'col-start-2' : ''}
              >
                <Link href={project.link} target='_blank'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='rounded-md hover:scale-[0.99] ease-in-out duration-200'
                    style={{ objectFit: 'cover' }}
                  />
                </Link>
              </AspectRatio>
              <div className={index % 2 !== 0 ? 'row-start-1 col-start-1' : ''}>
                <h3
                  className={`text-2xl font-semibold pb-6 ${
                    index % 2 === 0 ? 'text-end' : ''
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`bg-[darkslategrey] text-neutral-300 p-7 rounded-md  ${
                    index % 2 !== 0 ? 'text-start' : 'text-end'
                  }`}
                >
                  {project.description}
                </p>
                <ul
                  className={`flex gap-3 my-4 ${
                    index % 2 !== 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {project.stackText.map((stack, index) => (
                    <li key={index}>
                      <Badge className='bg-[darkCyan] text-[ghostWhite] px-3 py-1 pointer-events-none'>
                        {stack}
                      </Badge>
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex gap-2 ${
                    index % 2 !== 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <Link href={project.link} target='_blank'>
                    <FaGithub size={25} title='Github' />
                  </Link>
                  <Link href='https://github.com/Manjil-Thapa' target='_blank'>
                    <VscCode size={25} title='Live version' />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
