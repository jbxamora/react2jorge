import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Importing styles
import { Styles } from "../styles";

// Importing assets
import { github } from "../assets";

// Importing constants
import { projects } from "../constants";

// Importing motion utilities
import { fadeIn, textVariant } from "../utils/motion";

// Importing higher order components
import { SectionWrapper } from "../hoc";

// Component definition
const ProjectCard = ({
  index,
  name,
  image,
  description,
  source_code_link,
  tags,
}) => {
  return (
    // Applying Framer Motion animation to the component
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          {/* Displaying the project image */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Displaying the GitHub icon for source code link */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          {/* Displaying the project name and description */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {/* Displaying project tags */}
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// This code defines a functional component called Works This is my 'Project" component.
const Works = () => {
  // The component returns a JSX fragment, which contains multiple elements.
  return (
    <>
      {/* This motion.div element uses a variant called textVariant(). */}
      <motion.div variants={textVariant()}>
        {/*  This p element contains text that serves as a subtitle for the */}
        section.
        <p className={`${Styles.sectionSubText} `}>My work</p>
        {/*  This h2 element contains text that serves as the section heading. */}
        <h2 className={`${Styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* This div element contains a motion.p element that describes the projects. */}
      <div className="w-full flex">
        <motion.p
          // This motion.p element uses a variant called fadeIn() with specific parameters.
          variants={fadeIn("", "", 0.1, 1)}
          // This className sets some styling for the text.
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* This is the text content that describes the projects. */}
        </motion.p>
      </div>

      {/* This div element contains a list of ProjectCard components generated by the projects array. */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

// This exports the Works component wrapped with the SectionWrapper HOC.
export default SectionWrapper(Works, "");
