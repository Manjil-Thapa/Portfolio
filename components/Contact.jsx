'use client';

import { Button } from './ui/button';

const Contact = () => {
  const handleClick = event => {
    event.preventDefault();
    window.open('mailto:manjil.thapa.mgr@gmail.com', '_blank');
  };
  return (
    <section
      className='flex flex-col justify-center items-center h-screen p-20'
      id='contact'
    >
      <h2 className='mt-10'>What&apos;s the plan moving forward?</h2>
      <h3 className='text-3xl font-extrabold my-4'>Connect With Me</h3>
      <p className='px-[35rem] text-center mb-4 text-lg'>
        I&apos;m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try my
        best to get back to you.
      </p>
      <Button variant='secondary' onClick={handleClick}>
        Shoot Me An Email
      </Button>
    </section>
  );
};

export default Contact;
