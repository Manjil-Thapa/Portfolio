import Link from 'next/link';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Socials = () => {
  return (
    <nav>
      <ul className='flex'>
        <li>
          <Link href='https://facebook.com/zilthapa/' target='_blank'>
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link href='https://https://twitter.com/manjilthapa' target='_blank'>
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href='https://https://github.com/Manjil-Thapa' target='_blank'>
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            href='https://au.linkedin.com/in/manjil-thapa-306654142'
            target='_blank'
          >
            <FaLinkedin />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Socials;
