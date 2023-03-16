// Import the 'motion' component from the 'framer-motion' library
import { motion } from "framer-motion";

// Import the 'Styles' object from a 'styles.js' file and the 'staggerContainer' function from a 'motion.js' file
import { Styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Define a Higher-Order Component (HOC) called 'SectionWrapper', which takes in a 'Component' and an 'idName'
const SectionWrapper = (Component, idName) =>
  // Return a new function component called 'HOC'
  function HOC() {
    return (
      // Use the 'motion' component to create a new section with various animation properties
      <motion.section
        variants={staggerContainer()} // Define animation variants for the child components
        initial="hidden" // Set the initial animation state to 'hidden'
        whileInView="show" // Set the animation state to 'show' when the section is in view
        viewport={{ once: true, amount: 0.25 }} // Only trigger the animation once the section is 25% in view
        className={`${Styles.padding} max-w-7xl mx-auto relative z-0`} // Apply some styles to the section
      >
        {/* Add a span element with a unique ID */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Render the 'Component' passed in as a prop */}
        <Component />
      </motion.section>
    );
  };

// Export the 'SectionWrapper' HOC as the default export of this module
export default SectionWrapper;
