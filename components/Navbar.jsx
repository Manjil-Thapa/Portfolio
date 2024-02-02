'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [navHidden, setNavHidden] = useState(false);
  const [padding, setPadding] = useState('py-2');
  const [boxShadow, setBoxShadow] = useState('');
  const [navTransition, setNavTransition] = useState('');
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos.current > currentScrollPos;

      setNavHidden(!isVisible);
      prevScrollPos.current = currentScrollPos;

      if (currentScrollPos === 0) {
        setPadding('py-2');
        setBoxShadow('');
        setNavTransition(
          'transform 0.2s ease-in-out, padding 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
        );
      } else {
        setPadding('');
        setBoxShadow(
          '0px 4px 15px 0px #271A54, 0px 4px 15px 0px #2B1C5C, 0px 4px 15px 0px #2B1C5C'
        );
        setNavTransition(
          'transform 0.5s ease-in-out, padding 0.5s ease-in-out, box-shadow 0.5s ease-in-out'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-sm ${padding} ${
        navHidden && 'transform -translate-y-full'
      }`}
      style={{
        transition: navTransition,
      }}
    >
      <nav
        className={`flex justify-between w-full mx-auto my-2 max-w-screen-2xl py-2 px-8 rounded bg-[#2e2065e8]`}
        style={{
          boxShadow: boxShadow,
        }}
      >
        <h2>
          <Link href='/'>
            <Image src='/logo.png' width={100} height={100} alt='logo' />
          </Link>
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
    </div>
  );
};

export default Navbar;
