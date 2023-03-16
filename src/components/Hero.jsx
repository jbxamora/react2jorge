import { motion } from "framer-motion"; // Importing motion from framer-motion library for animations

import { Styles } from "../styles"; // Importing Styles object for reusing CSS classes
import { ComputersCanvas } from "./canvas"; // Importing ComputersCanvas component

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${Styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Logo and line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Headline and subtext */}
        <div>
          <h1 className={`${Styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Jorge</span>
          </h1>
          <p className={`${Styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, virtual <br className="sm:block hidden" />
            assistants and web applications
          </p>
        </div>
      </div>

      {/* 3DComputer canvas */}
      <ComputersCanvas />

      {/* Animated Scroll/Mouse */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              // Animation properties for motion.div
              animate={{
                y: [0, 24, 0], // Animate the y-axis position of the element in an array of values
              }}
              // Transition properties for motion.div
              transition={{
                duration: 1.5, // Time in seconds for the animation to complete
                repeat: Infinity, // Number of times the animation should repeat
                repeatType: "loop", // Type of repeat animation, which loops back to the start
              }}
              // Styling properties for motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
