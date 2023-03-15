import React from 'react'
import { motion } from 'framer-motion';
import { Styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen
    mx-auto'>
      <div className={`${Styles.paddingx} absolute
      inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-full justify-center items-center mt-5'>
          <div className='w-5 h-5 rounder-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40
          violet-gradient'/>
        </div>
        <div>
          <h1 className={`${Styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Jorge</span></h1>
          <p className={`${Styles.heroSubText} mt-2
          text-white-100`}>
            I develop 3D visuals, CLI apps, and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero