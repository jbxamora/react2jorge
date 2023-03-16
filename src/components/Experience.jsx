import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { Styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
  contentStyle={{ background: "#1d1836, color: #fff"}}
  contentArrowStyle={{ borderRight: '7px solid #232631' }}
  date={experience.date}
  iconStyle={{ background: experience.iconBg }} 
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img 
      src={experience.icon}
      alt={experience.company_name}
      className='w-[60%] h-[%60]
      object-contain'
      />
    </div>
  }
  >
    <div>
      <h3 className='text-white text-[24px] font bold'>{experience.title}</h3>
      <p></p>
    </div>
  </VerticalTimelineElement>
)
    
  
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={Styles.sectionSubText}>
          What Ive Done So Far
        </p>
        <h2 className={Styles.sectionHeadText}>
        Work Experience
        </h2>
        </motion.div>

        <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}
            />
          ))}
        </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')