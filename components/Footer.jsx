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
    <footer className='flex flex-col justify-center items-center p-4'>
      <h4>
        Designed & built by
        <Link
          href='https://github.com/Manjil-Thapa'
          target='_blank'
          className='ml-2 hover:text-cyan-300'
        >
          Manjil Thapa
        </Link>
      </h4>
      <p>
        Inspired by
        <Link href='https://v4.brittanychiang.com/' target='_blank' className='pr-2'>
          Brittany Chiang
        </Link>
      </p>
      <div className='flex justify-center items-center gap-1'>
        <PiCopyrightThin />
        <h4>{currentYear}</h4>
      </div>
    </footer>
  );
};

export default Footer;
