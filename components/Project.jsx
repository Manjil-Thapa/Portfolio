'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from './ui/badge';
import { FaGithub } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BiLinkExternal } from 'react-icons/bi';

const Project = ({ project, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  if (inView) {
    controls.start('visible');
  }

  return (
    <motion.article
      key={index}
      className={`grid grid-cols-2 gap-x-4 ${index % 2 === 0 ? 'even' : 'odd'}`}
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.5 },
        },
      }}
    >
      <AspectRatio ratio={16 / 9} className={index % 2 !== 0 ? 'col-start-2' : ''}>
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
          className={`bg-sky-900 py-9 px-6 rounded-md  ${
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
              <Badge className='bg-slate-600 px-3 py-1 pointer-events-none font-jura'>
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
            <BiLinkExternal size={25} title='Live version' />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default Project;
