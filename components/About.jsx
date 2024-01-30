import { TbBrandNextjs } from 'react-icons/tb';
import {
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiJest,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
} from 'react-icons/si';

const About = () => {
  return (
    <section className='h-screen p-20 max-w-screen-2xl m-auto' id='about'>
      <h2 className='text-center mb-4 text-5xl font-bold'>About Me</h2>
      <div className='grid grid-cols-2 gap-12'>
        <div className='h-full'>
          <h3 className='pb-10 text-2xl text-center'>WHAT I DO</h3>
          <p className='text-xl leading-relaxed pb-5'>
            Hi, I&apos;m Manjil. I am a Frontend Developer based in Brisbane, QLD. I
            enjoy being given challenging, visually-pleasing designs and making them
            a reality. The process of tearing an idea down into its smallest
            components, learning, and figuring out how to put those pieces together,
            all while making it performant, excites me.
          </p>
          <p className='text-xl leading-relaxed pb-5'>
            Right now, I&apos;m working as a frontend engineer at Nebo, an
            advertising agency based in Atlanta, where I contribute to building
            accessible, human-centered projects.
          </p>
          <p className='text-xl leading-relaxed pb-5'>
            Apart from web development, I do cinematography and make short cinematic
            music videos on YouTube. It&apos;s very fulfilling for me and has given a
            creative-outlet to my avocation.
          </p>
        </div>
        <div>
          <h3 className='pb-10 text-2xl text-center'>SKILLS & LANGUAGES</h3>
          <ul className='grid grid-cols-4 grid-rows-3 gap-5'>
            {skills.map(skill => (
              <li
                key={skill.name}
                className='flex flex-col justify-center items-center'
              >
                {skill.icon}
                <span className='pointer-events-none'>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

const skills = [
  {
    icon: <FaHtml5 size={40} color='#f06529' />,
    name: 'HTML',
  },
  {
    icon: <FaCss3Alt size={40} color='#2965f1' />,
    name: 'CSS',
  },
  {
    icon: <SiJavascript size={40} color='#f0db4f' />,
    name: 'JavaScript',
  },
  {
    icon: <FaReact size={40} color='#88dded' />,
    name: 'React',
  },
  {
    icon: <TbBrandNextjs size={40} />,
    name: 'NextJS',
  },
  {
    icon: <SiTailwindcss size={40} color='#fd5af8' />,
    name: 'TailwindCSS',
  },
  {
    icon: <SiExpress size={40} />,
    name: 'ExpressJS',
  },
  {
    icon: <FaNodeJs size={40} color='#68a063' />,
    name: 'NodeJS',
  },
  {
    icon: <SiMongodb size={40} color='#3fa037' />,
    name: 'MongoDB',
  },
  {
    icon: <SiJest size={40} color='#ffce00' />,
    name: 'Jest',
  },
  {
    icon: <FaGithub size={40} color='#24292e' fill='white' />,
    name: 'Github',
  },
  {
    icon: <FaGitAlt size={40} color='#f1502f' />,
    name: 'Git',
  },
];

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
