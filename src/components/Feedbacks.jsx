import React from "react";
import { motion } from "framer-motion";

import { Styles } from "../styles"; //importing Styles from '../styles' file
import { SectionWrapper } from "../hoc"; //importing SectionWrapper from '../hoc' file
import { fadeIn, textVariant } from "../utils/motion"; //importing 'fadeIn' and 'textVariant' functions from '../utils/motion' file
import { testimonials } from "../constants"; //importing 'testimonials' array from '../constants' file

// A functional component to display feedback card for each testimonial
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)} //using 'fadeIn' function to animate the feedback card
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// A functional component to display all the feedback cards
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${Styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={Styles.sectionSubText}>What others say</p>
          <h2 className={Styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${Styles.paddingX} flex flex-wrap gap-7`}>
        {/* using map() function to iterate through 'testimonials' array in constants index and displaying feedback card for each testimonial */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// exporting Feedbacks component wrapped with SectionWrapper high order component
export default SectionWrapper(Feedbacks, "");
