import { motion } from 'framer-motion';
import techStack from '@/techStack';

const About = () => {
  const skills = [
    ...techStack.languages,
    ...techStack.frontendDev,
    ...techStack.backendDev,
    ...techStack.database,
    ...techStack.tools,
  ];
  return (
    <section className='h-screen p-20 max-w-screen-2xl m-auto' id='about'>
      <h2 className='text-center mb-4 text-5xl font-bold pb-12'>About Me</h2>
      <div className='grid grid-cols-2 gap-12'>
        <div className='h-full'>
          <h3 className='pb-10 text-2xl font-medium text-center'>WHAT I DO</h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            className='text-xl leading-relaxed pb-5'
          >
            Hi, I&apos;m Manjil. I am a Frontend Developer based in Brisbane, QLD. I
            enjoy being given challenging, visually-pleasing designs and making them
            a reality. The process of tearing an idea down into its smallest
            components, learning, and figuring out how to put those pieces together,
            all while making it performant, excites me.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            className='text-xl leading-relaxed pb-5'
          >
            Right now, I&apos;m working as a frontend engineer at Nebo, an
            advertising agency based in Atlanta, where I contribute to building
            accessible, human-centered projects.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 0.6 } }}
            className='text-xl leading-relaxed pb-5'
          >
            Apart from web development, I do cinematography and make short cinematic
            music videos on YouTube. It&apos;s very fulfilling for me and has given a
            creative-outlet to my avocation.
          </motion.p>
        </div>
        <div>
          <h3 className='pb-10 text-2xl font-medium text-center'>
            I have experience with technologies such as:
          </h3>
          <div>
            <h4>Languages</h4>
            <ul className='flex'>
              {techStack.languages.map(lang => (
                <li key={lang.name}>
                  {lang.icon}
                  <span>{lang.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Frontend Development</h4>
            <ul className='flex'>
              {techStack.frontendDev.map(stack => (
                <li key={stack.name}>
                  {stack.icon}
                  <span>{stack.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Backend Development</h4>
            <ul className='flex'>
              {techStack.backendDev.map(stack => (
                <li key={stack.name}>
                  {stack.icon}
                  <span>{stack.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Database</h4>
            <ul className='flex'>
              {techStack.database.map(stack => (
                <li key={stack.name}>
                  {stack.icon}
                  <span>{stack.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Tools</h4>
            <ul className='flex'>
              {techStack.tools.map(stack => (
                <li key={stack.name}>
                  {stack.icon}
                  <span>{stack.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className='grid grid-cols-4 grid-rows-3 gap-5'>
            {/* {skills.map(skill => (
              <li
                key={skill.name}
                className='flex flex-col justify-center items-center'
              >
                {skill.icon}
                <span className='pointer-events-none font-jura'>{skill.name}</span>
              </li>
            ))} */}
          </ul>
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
