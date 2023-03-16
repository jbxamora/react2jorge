import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

import { Styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {}

    const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={Styles.sectionSubText}>
          Let's Make Some Magic
        </p>
          <h3 className={Styles.sectionHeadText}>
          Contact
          </h3>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");