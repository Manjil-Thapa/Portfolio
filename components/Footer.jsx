import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiCopyrightThin } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center'>
      <ul className='flex'>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <div className='flex items-center gap-1'>
        <PiCopyrightThin /> Manjil Thapa 2024
      </div>
    </footer>
  );
};

export default Footer;
