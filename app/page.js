'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LogoSvg from '@/components/LogoSvg';
import Navbar from '@/components/Navbar';
import Socials from '@/components/Socials';
import { useState } from 'react';

export default function Home() {
  const [showPage, setShowPage] = useState(false);
  const handleAnimationComplete = () => {
    setShowPage(true);
  };

  return (
    <div className='relative'>
      {!showPage && (
        <div className='flex justify-center items-center h-screen'>
          <LogoSvg onAnimationComplete={handleAnimationComplete} />
        </div>
      )}
      {showPage && (
        <>
          <Navbar />
          <Hero />
          <FeaturedProjects />
          <About />
          <Contact />
          <Socials />
          <Footer />
        </>
      )}
    </div>
  );
}
