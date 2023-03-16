// Importing necessary dependencies
import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Defining Tech component
const Tech = () => {
  // Returning a flex container with each technology rendered as a BallCanvas component
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

// Exporting Tech component wrapped with SectionWrapper HOC
export default SectionWrapper(Tech, ""); // Here the second parameter is empty, which means that no custom section name will be passed.
