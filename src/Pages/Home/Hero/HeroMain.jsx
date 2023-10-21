import styles from '../../../assets/css/page.module.scss'
import HeroTestimonial from "../Hero/HeroTestimonial"
import { useState } from 'react';  
import { motion } from 'framer-motion';
import useMousePosition from '../../../utils/UseMousePosition';
import Hero from './Hero';
// import ComponentHero from './ComponentHero';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 20;

  return (
    <main className={styles.main}>
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
          {/* <p className='.p text-4xl font-extrabold' onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
          </p> */}

<div      onMouseEnter={() => {setIsHovered(true)}}
    onMouseLeave={() => {setIsHovered(false)}}>

<HeroTestimonial/>

</div>


      </motion.div>

      <div >
      <Hero/>
      </div>


    </main>
  )
}
