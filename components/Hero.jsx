import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      className='grid md:grid-cols-2 max-w-screen-2xl m-auto p-20 lg:mt-0 mt-12 lg:h-screen'
      id='home'
    >
      <div className='flex flex-col justify-center gap-2 pl-6'>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            type: 'tween',
            transition: { duration: 1, delay: 0.2 },
          }}
          className='text-2xl font-medium'
        >
          Hello there! I am
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            type: 'tween',
            transition: { duration: 1, delay: 0.6 },
          }}
          className='pb-2 text-7xl font-bold mb-4'
        >
          Manjil Thapa.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            type: 'tween',
            transition: { duration: 1, delay: 0.8 },
          }}
          className='text-xl mb-4 max-w-px'
        >
          Web Developer with a strong passion for frontend development. I specialize
          in creating visually appealing, responsive, and feature-rich web
          applications, prioritizing seamless user experience.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            type: 'tween',
            transition: { duration: 1, delay: 1 },
          }}
          className='mb-12 md:mb-0'
        >
          Feel free to reach out - I am excited to connect!
        </motion.p>
      </div>
      <motion.div
        className='place-self-center'
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          type: 'tween',
          transition: { duration: 1, delay: 0.8 },
        }}
      >
        <Image
          src='/hero-placeholder.jpg'
          alt='hero'
          width={400}
          height={400}
          className='m-auto rounded-sm'
        />
      </motion.div>
    </section>
  );
};

export default Hero;
