'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [navHidden, setNavHidden] = useState(false);
  const [padding, setPadding] = useState('py-8 px-8');
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos.current > currentScrollPos;

      setNavHidden(!isVisible);
      prevScrollPos.current = currentScrollPos;

      currentScrollPos === 0 ? setPadding('py-8 px-8') : setPadding('py-6 px-8');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between fixed top-0 inset-x-0 w-full mx-auto my-2 max-w-screen-2xl transition-all duration-500 ease-in-out 
      z-50 ${padding} ${navHidden && 'transform -translate-y-full'}`}
    >
      <h2>
        <Link href='/'>Manjil</Link>
      </h2>

      <ul className='flex items-center gap-3'>
        <li>
          <Link href='#projects'>Projects</Link>
        </li>
        <li>
          <Link href='#about'>About</Link>
        </li>
        <li>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
