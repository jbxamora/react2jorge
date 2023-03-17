// Import necessary dependencies and components
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { Styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

// Define Contact component
const Contact = () => {
  // Declare formRef and form state variables using useState hook
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Declare loading state variable using useState hook
  const [loading, setLoading] = useState(false);

  // Define handleChange function to update form state when input fields change
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Define handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use emailjs library to send email
    emailjs
      .send(
        "service_88ac7s1",
        "template_r0q25ev",
        {
          from_name: form.name,
          to_name: "Jorge",
          form_email: form.email,
          to_email: "jbxamora@icloud.com",
          message: form.message,
        },
        "x1z0XVxJpE0k6XVbU"
      )
      .then(
        () => {
          setLoading(false);
          // Show success message and reset form state
          alert("Thank you. I will get back to you within 5 business days!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          // Show error message
          alert("Something went wrong.");
        }
      );
  };

  return (
    // A container with flex layout, different styles based on screen size, and no overflow
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* A motion component with animation variants for sliding in from the left */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* A text heading and subheading for the contact section */}
        <p className={Styles.sectionSubText}>Let's Make Some Magic</p>
        <h3 className={Styles.sectionHeadText}>Contact</h3>
        {/* A form with a reference, submission handler, and input fields for name, email, and message */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col"
        >
          {/* A label and input field for the name */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* A label and input field for the email */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* A label and textarea for the message */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to work on?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          {/* A button with different text depending on whether a submission is loading */}
          <div className="flex flex-col items-center sm:flex-row sm:justify-center">
            <button
              type="submit"
              className="bg-tertiary mt-4 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mr-4 sm:justify-content-center"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            <a
              href="https://github.com/jbxamora"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary mt-4 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl mr-4 hidden sm:inline-block"
            >
              GitHub
            </a>
            <a
              href="https://gist.github.com/jbxamora"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary mt-4 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hidden sm:inline-block"
            >
              Blog
            </a>
          </div>
        </form>
      </motion.div>

      {/* A motion component with animation variants for sliding in from the right */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* A canvas component for rendering an animated Earth */}
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// This component is exported and wrapped with a higher-order component called SectionWrapper with the "contact" section ID.
export default SectionWrapper(Contact, "contact");
