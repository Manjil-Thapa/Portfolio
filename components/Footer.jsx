'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PiCopyrightThin } from 'react-icons/pi';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    function updateYear() {
      setCurrentYear(new Date().getFullYear());
    }
    document.addEventListener('DOMContentLoaded', updateYear);
    return () => {
      document.removeEventListener('DOMContentLoaded', updateYear);
    };
  }, []);

  return (
    <footer className='flex flex-col justify-center items-center p-4 font-jura'>
      <h4>
        Designed & built by
        <Link
          href='https://github.com/Manjil-Thapa'
          target='_blank'
          className='ml-1 hover:text-cyan-300 font-jura'
        >
          Manjil Thapa
        </Link>
      </h4>
      <div className='flex justify-center items-center gap-1'>
        <PiCopyrightThin /> Copyright
        <h4>{currentYear}</h4>
      </div>
    </footer>
  );
};

export default Footer;
