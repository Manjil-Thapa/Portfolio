import Link from 'next/link';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Socials = () => {
  return (
    <nav className='fixed top-[42%]'>
      <ul>
        {socials.map(social => {
          return (
            <li key={social.title} className='m-2 border-none max-w-min'>
              <Link
                href={social.href}
                target='_blank'
                className='block hover:translate-x-3.5 transition duration-150'
              >
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
    title: 'linkedIn',
    icon: <FaLinkedin size={40} />,
    href: 'https://au.linkedin.com/in/manjil-thapa-306654142',
  },
  {
    title: 'twitter',
    icon: <FaSquareXTwitter size={40} />,
    href: 'https://twitter.com/manjilthapa',
  },
  {
    title: 'facebook',
    icon: <FaFacebookSquare size={40} />,
    href: 'https://facebook.com/zilthapa/',
  },
];
