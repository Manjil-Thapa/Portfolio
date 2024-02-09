import { TbBrandNextjs } from 'react-icons/tb';
import {
  FaHtml5,
  FaReact,
  FaGitAlt,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiJest,
  SiTailwindcss,
  SiExpress,
  SiJavascript,
  SiFirebase,
} from 'react-icons/si';

const techStack = {
  languages: [
    { icon: <FaHtml5 size={40} color='#f06529' />, name: 'HTML' },
    { icon: <FaCss3Alt size={40} color='#2965f1' />, name: 'CSS' },
    { icon: <SiJavascript size={40} color='#f0db4f' />, name: 'JavaScript' },
  ],
  frontendDev: [
    { icon: <FaReact size={40} color='#88dded' />, name: 'React' },
    { icon: <TbBrandNextjs size={40} />, name: 'NextJS' },
    { icon: <SiTailwindcss size={40} color='#fd5af8' />, name: 'TailwindCSS' },
  ],
  backendDev: [
    { icon: <SiExpress size={40} />, name: 'ExpressJS' },
    { icon: <FaNodeJs size={40} color='#68a063' />, name: 'NodeJS' },
  ],
  database: [
    { icon: <SiMongodb size={40} color='#3fa037' />, name: 'MongoDB' },
    { icon: <SiFirebase size={40} color='yellow' />, name: 'Firebase' },
  ],
  tools: [
    { icon: <FaGithub size={40} color='#24292e' fill='white' />, name: 'Github' },
    { icon: <FaGitAlt size={40} color='#f1502f' />, name: 'Git' },
    { icon: <SiJest size={40} color='#ffce00' />, name: 'Jest' },
    { icon: <FaFigma size={40} />, name: 'Figma' },
  ],
};

export default techStack;
