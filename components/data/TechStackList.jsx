import { TbBrandNextjs } from 'react-icons/tb';
import {
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaPython,
} from 'react-icons/fa6';
import {
  SiMongodb,
  SiJest,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiFirebase,
} from 'react-icons/si';

const techStack = {
  languages: {
    description: 'Languages',
    items: [
      { icon: <FaHtml5 size={30} color='#f06529' />, name: 'HTML' },
      { icon: <FaCss3Alt size={30} color='#2965f1' />, name: 'CSS' },
      { icon: <SiJavascript size={30} color='#f0db4f' />, name: 'JavaScript' },
      { icon: <FaPython size={30} color='yellow' />, name: 'Python' },
    ],
  },
  frontend: {
    description: 'Frontend Development',
    items: [
      { icon: <SiTailwindcss size={30} color='#fd5af8' />, name: 'TailwindCSS' },
      { icon: <FaReact size={30} color='#88dded' />, name: 'React' },
      { icon: <TbBrandNextjs size={30} />, name: 'NextJS' },
    ],
  },
  backend: {
    description: 'Backend Development',
    items: [
      { icon: <FaNodeJs size={30} color='#68a063' />, name: 'NodeJS' },
      { icon: <SiExpress size={30} />, name: 'ExpressJS' },
    ],
  },
  database: {
    description: 'Database',
    items: [
      { icon: <SiMongodb size={30} color='#3fa037' />, name: 'MongoDB' },
      { icon: <SiFirebase size={30} color='yellow' />, name: 'Firebase' },
    ],
  },
  tools: {
    description: 'Tools',
    items: [
      { icon: <FaGitAlt size={30} color='#f1502f' />, name: 'Git' },
      {
        icon: <FaGithub size={30} />,
        name: 'Github',
      },
      { icon: <SiJest size={30} color='#ffce00' />, name: 'Jest' },
      { icon: <FaFigma size={30} />, name: 'Figma' },
    ],
  },
};

const TechStackList = ({ category }) => (
  <div className='bg-sky-900 mb-2 rounded-lg py-2 px-4 flex items-center gap-8 lg:mx-0'>
    <h4 className='text-white text-lg'>{techStack[category].description + ' :'}</h4>
    <ul className='flex gap-6 my-2'>
      {techStack[category].items.map(item => (
        <li key={item.name} className='flex flex-col items-center'>
          {item.icon}
          <span className='font-jura text-xs'>{item.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TechStackList;
