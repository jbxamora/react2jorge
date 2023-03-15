import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { Styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ title, Icon, index }) => {
  return (
    <Tilt className='xs:w-[250] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed:450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px]
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={Styles.sectionSubText}>
        Introduction
      </p>
        <h2 className={Styles.sectionHeadText}>Overview</h2>
    </motion.div>
    
    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
I am a junior developer with experience in the MERN stack. I started coding chatbots using Python and found my way into a coding bootcamp. 
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default About