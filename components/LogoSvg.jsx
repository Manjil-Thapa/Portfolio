'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const LogoSvg = ({ onAnimationComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: 0,
        transition: { duration: 0.2, delay: 3, ease: 'easeIn' },
      });
      onAnimationComplete();
    };
    sequence();
  }, [controls, onAnimationComplete]);

  return (
    <>
      <motion.svg
        width='240'
        height='657'
        viewBox='0 0 1408 657'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        animate={controls}
      >
        <motion.path
          d='M213 162C213 159.791 214.791 158 217 158H284V495C284 497.209 282.209 499 280 499H217C214.791 499 213 497.209 213 495V162Z'
          fill='white'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2,
            ease: 'easeIn',
          }}
        />
        <motion.path
          d='M530 158H597C599.209 158 601 159.791 601 162V495C601 497.209 599.209 499 597 499H534C531.791 499 530 497.209 530 495V158Z'
          fill='white'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2,
            ease: 'easeIn',
          }}
        />
        <motion.path
          d='M282 254V158H294.599C296.077 158 297.434 158.815 298.129 160.119L406.117 362.795C406.494 363.501 407.506 363.501 407.883 362.795L515.871 160.119C516.566 158.815 517.923 158 519.401 158H532V254L433.197 431.055C421.753 451.563 392.247 451.563 380.803 431.055L282 254Z'
          fill='white'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2,
            ease: 'easeIn',
          }}
        />
        <motion.path
          d='M704 4H1404V653H704'
          stroke='white'
          strokeWidth={6}
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: [0, 1], pathOffset: [1, 0] }}
          transition={{ duration: 1.5, times: [0, 1], ease: 'easeInOut' }}
        />
        <motion.path
          d='M704 4H4.00002V653H704'
          stroke='white'
          strokeWidth={6}
          initial={{ pathLength: 0, pathOffset: 0 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5, times: [0, 1], ease: 'easeInOut' }}
        />
        <motion.path
          d='M832 116H1195V541.25H1164.5L1049 541.25V207H1148V158L1020 158H878V207H914.5H979V313.5V403.5V452V500L1049 499V541.25L832 541.25V116Z'
          fill='#F3F1F1'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2,
            ease: 'easeIn',
          }}
        />
      </motion.svg>
    </>
  );
};

export default LogoSvg;
