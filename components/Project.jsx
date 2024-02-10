'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { FaGithub } from 'react-icons/fa6';
import { BiLinkExternal } from 'react-icons/bi';
import { Badge } from './ui/badge';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      className={`md:grid md:grid-cols-2 gap-x-4 p-12 bg-[#2c3167] rounded-2xl ${
        index % 2 === 0 ? 'even' : 'odd'
      } px-6`}
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
      <AspectRatio
        ratio={16 / 9}
        className={`md:block ${index % 2 !== 0 ? 'col-start-2' : ''}`}
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
          className={`text-2xl font-semibold pb-6 pt-6 md:pt-0 ${
            index % 2 === 0 ? 'md:text-end' : ''
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
        <div className='flex items-center justify-between md:block '>
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
      </div>
    </motion.article>
  );
};

export default Project;
