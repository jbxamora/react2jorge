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
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={Styles.sectionSubText}>Let's Make Some Magic</p>
        <h3 className={Styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary
                text-white rounded-lg outlined-none
                border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary
                text-white rounded-lg outlined-none
                border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to work on?"
              className="bg-tertiary py-4 px-6
                placeholder:text-secondary
                text-white rounded-lg outlined-none
                border-none font-medium"
            />
          </label>
          
          <button
          type='submit'
          className='bg-tertiary mt-4 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>
      </motion.div>

<motion.div
variants={slideIn('right', 'tween', 0.2, 1)}
className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
<EarthCanvas />
</motion.div>

    </div>
  );
}

export default SectionWrapper(Contact, "contact");