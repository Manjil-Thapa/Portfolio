import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const logoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { type: 'tween', duration: 1, ease: 'easeInOut' },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: 100, y: -300 },
  visible: index => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: index * 0.2,
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
    },
  }),
};

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
        setTimeout(() => {
          setPadding('py-2');
          setBoxShadow('');
          setNavTransition(
            'transform 0.2s ease-in-out, padding 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
          );
        }, 500);
      } else {
        setPadding('');
        setBoxShadow('0px 0px 40px -8px #232755,0px 8px 50px -4px #232755');
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
        className={`flex justify-between w-full mx-auto my-2 max-w-screen-2xl py-3 px-8 rounded bg-[#262a5cf1]`}
        style={{
          boxShadow: boxShadow,
        }}
      >
        <motion.h2 initial='hidden' animate='visible' variants={logoVariants}>
          <Image
            src='/main-logo.svg'
            width={100}
            height={100}
            alt='logo'
            className='hover:bg-indigo-950 transition-colors duration-300 cursor-pointer'
            onClick={() =>
              document.getElementById('home'.replace('#', '')).scrollIntoView()
            }
          />
        </motion.h2>

        <ul className='flex items-center gap-3 font-sora'>
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className='hover:text-indigo-200 tracking-wider px-1 cursor-pointer'
              initial='hidden'
              animate='visible'
              variants={listItemVariants}
              custom={index}
              onClick={() =>
                document.getElementById(link.href.replace('#', '')).scrollIntoView()
              }
            >
              {link.name}
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
