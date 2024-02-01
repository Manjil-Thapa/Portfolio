import Link from 'next/link';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Socials = () => {
  return (
    <nav className='fixed top-[42%]'>
      <ul>
        {socials.map(social => {
          return (
            <li
              key={social.title}
              className='py-1 border-solid border-transparent border-2 max-w-min 
              hover:translate-x-3.5 transition duration-150'
            >
              <Link href={social.href} target='_blank'>
                {social.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Socials;

const socials = [
  {
    title: 'github',
    icon: <FaGithubSquare size={40} />,
    href: 'https://github.com/Manjil-Thapa',
  },
  {
    title: 'facebook',
    icon: <FaFacebookSquare size={40} color='#316FF6' />,
    href: 'https://facebook.com/zilthapa/',
  },
  {
    title: 'twitter',
    icon: <FaSquareXTwitter size={40} />,
    href: 'https://twitter.com/manjilthapa',
  },
  {
    title: 'linkedIn',
    icon: <FaLinkedin size={40} color='#0077b5' />,
    href: 'https://au.linkedin.com/in/manjil-thapa-306654142',
  },
];
