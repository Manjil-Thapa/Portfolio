import { PiCopyrightThin } from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center p-4'>
      <h4>Designed & built by Manjil Thapa</h4>
      <div className='flex justify-center items-center gap-1'>
        <PiCopyrightThin /> <h4>2024</h4>
      </div>
    </footer>
  );
};

export default Footer;
