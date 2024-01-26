import Image from 'next/image';

const Hero = () => {
  return (
    <section className='grid grid-cols-2 max-w-screen-xl m-auto h-5/6'>
      <div>
        <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 max-w-max'>
          Hi, I&apos;m Josh. A Frontend Developer based in Brisbane.
        </h1>
        <p>
          I like creating clean, responsive and functional web apps with great user
          experiences.
        </p>
      </div>
      <Image
        src='/hero-placeholder.jpg'
        alt='hero'
        width={400}
        height={400}
        className='m-auto'
      />
    </section>
  );
};

export default Hero;
