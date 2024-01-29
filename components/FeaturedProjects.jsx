import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { featuredProjects } from '@/featuredProjects';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const FeaturedProjects = () => {
  return (
    <section className='max-w-screen-xl m-auto'>
      <div>
        <h2 className='text-center pb-4 text-3xl font-bold'>Featured Projects</h2>
        <div className='grid grid-cols-2 gap-2'>
          {featuredProjects.map(project => (
            <React.Fragment key={project.title}>
              <AspectRatio ratio={16 / 9}>
                <Link href={project.link} target='_blank'>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='rounded-md hover:scale-[0.99] ease-in-out duration-200'
                  />
                </Link>
              </AspectRatio>
              <div>
                <h3 className='text-end text-2xl font-semibold pb-10'>
                  {project.title}
                </h3>
                <p className='bg-cyan-900 text-neutral-300 p-7 rounded-md text-end'>
                  {project.description}
                </p>
                <ul className='flex gap-2 justify-end my-4'>
                  {project.stack.map((icon, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={200}>
                        <Tooltip>
                          <TooltipTrigger asChild>{icon}</TooltipTrigger>
                          <TooltipContent>
                            <p>{project.stackText[index]}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
                <div className='flex justify-end gap-2'>
                  <Link href={project.link} target='_blank'>
                    <FaGithub size={25} />
                  </Link>
                  <Link href='https://github.com/Manjil-Thapa' target='_blank'>
                    <VscCode size={25} />
                  </Link>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
