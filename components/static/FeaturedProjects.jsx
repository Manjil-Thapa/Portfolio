import React from 'react';
import { featuredProjects } from '@/featuredProjects';
import Project from '../Project';

const FeaturedProjects = () => {
  return (
    <section className='max-w-screen-xl m-auto p-20' id='projects'>
      <div>
        <h2 className='text-center pb-12 text-4xl font-bold'>Featured Projects</h2>
        <div className='grid grid-rows-4 gap-20'>
          {featuredProjects.map((project, index) => (
            <Project key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
