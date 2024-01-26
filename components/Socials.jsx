import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = () => {
  return (
    <nav>
      <ul>
        {socials.map(social => {
          return (
            <li key={social.title} className='py-1'>
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
    title: 'facebook',
    icon: <FaFacebook size={40} color='#316FF6' />,
    href: 'https://facebook.com/zilthapa/',
  },
  {
    title: 'twitter',
    icon: <FaXTwitter size={40} />,
    href: 'https://https://twitter.com/manjilthapa',
  },
  {
    title: 'github',
    icon: <FaGithub size={40} />,
    href: '/https://https://github.com/Manjil-Thapa',
  },
  {
    title: 'linkedIn',
    icon: <FaLinkedin size={40} />,
    href: 'https://au.linkedin.com/in/manjil-thapa-306654142',
  },
];
