const About = () => {
  return (
    <section className='h-screen p-20'>
      <h2 className='text-center mb-4'>About Me</h2>
      <div className='grid grid-cols-2 gap-12'>
        <div className='h-full'>
          <h3>WHAT I DO</h3>
          <p>
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
          </p>
        </div>
        <div>
          <h3>SKILLS & LANGUAGES</h3>
          <ul className='flex gap-2'>
            {skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Github',
  'NextJS',
  'MongoDB',
  'Jest',
  'TailwindCSS',
];
