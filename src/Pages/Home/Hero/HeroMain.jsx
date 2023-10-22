import styles from '../../../assets/css/page.module.scss'
import HeroTestimonial from "../Hero/HeroTestimonial"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../../../utils/UseMousePosition';
import Hero from './Hero';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 20;

  const [isDesktopScreen, setIsDesktopScreen] = useState(window.innerWidth > 768); 

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopScreen(window.innerWidth > 768); 
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className={styles.main}>
      {isDesktopScreen && ( 
        <motion.div
          className={styles.mask}
          initial={{
            WebkitMaskSize: `${size}px`,
          }}
          animate={{
            WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <div
            className=''
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <HeroTestimonial />
          </div>
        </motion.div>
      )}

      <div>
        <Hero />
      </div>
    </main>
  );
}
