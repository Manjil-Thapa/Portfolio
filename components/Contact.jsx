'use client';

import { Button } from './ui/button';

const Contact = () => {
  const handleClick = event => {
    event.preventDefault();
    window.open('mailto:manjil.thapa.mgr@gmail.com', '_blank');
  };
  return (
    <section
      className='flex flex-col justify-center items-center lg:h-screen p-20'
      id='contact'
    >
      <h2 className='mt-10'>What&apos;s the plan moving forward?</h2>
      <h3 className='text-3xl font-extrabold my-4'>Connect With Me</h3>
      <p className='max-w-screen-sm text-center mb-4 text-lg'>
        I am actively exploring new opportunities, and my inbox is always available
        for any inquiries. Feel free to reach out with questions or simply want to
        drop a greeting, I will make an effort to respond promptly.
      </p>
      <Button variant='secondary' onClick={handleClick}>
        Shoot Me An Email
      </Button>
    </section>
  );
};

export default Contact;
