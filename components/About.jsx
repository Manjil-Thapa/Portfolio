import { motion } from 'framer-motion';
import TechStackList from './data/TechStackList';
const About = () => {
  return (
    <section className='lg:h-screen p-20 max-w-screen-2xl m-auto' id='about'>
      <h2 className='text-center mb-4 text-5xl font-bold pb-12'>About Me</h2>
      <div className='md:grid  lg:grid-cols-2 lg:gap-12'>
        <div className='h-full'>
          <h3 className='pb-10 text-xl font-bold'>What I do</h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            className='text-xl leading-relaxed pb-5 lg:mx-0'
          >
            I am a self-taught web developer with a focus on the frontend development
            and specialized in the MERN stack, with a proficiency in crafting
            innovative web applications and integrating reliable APIs. I am a
            lifelong learner, driven, and well-versed in RESTful architecture,
            consistently striving for clean, structured, and maintainable code.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            className='text-xl leading-relaxed pb-5 lg:mx-0'
          >
            I derive satisfaction from transforming ideas into tangible, useful
            products, exercising my creativity in the process. My expertise lies in
            building scalable applications, and I am passionate about staying updated
            on new technologies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            className='text-xl leading-relaxed mb-12 lg:mx-0 lg:mb-5'
          >
            As a highly disciplined individual, I adapt well to learning newer
            technologies and aspire to pursue a career that allows me to channel my
            creativity into crafting beautiful software and engaging experiences.
            Currently, I am learning TypeScript to become a better developer.
          </motion.p>
        </div>
        <div>
          <h3 className='mb-10 text-xl font-bold lg:ml-0'>
            I have experience with technologies such as:
          </h3>
          <TechStackList category='languages' />
          <TechStackList category='frontend' />
          <TechStackList category='backend' />
          <TechStackList category='database' />
          <TechStackList category='tools' />
        </div>
      </div>
    </section>
  );
};

export default About;
{
  /* <p>
I&apos;m a Frontend Web Developer building the Front-end of Websites and
Web Applications that leads to the success of the overall product. Check
out some of my work in the Projects section. I also like sharing content
related to the stuff that I have learned over the years in Web
Development so it can help other people of the Dev Community. Feel free
to Connect or Follow me on my Linkedin where I post useful content
related to Web Development and Programming I&apos;m open to Job
opportunities where I can contribute, learn and grow. If you have a good
opportunity that matches my skills and experience then don&apos;t
hesitate to contact me.
</p> */
}
