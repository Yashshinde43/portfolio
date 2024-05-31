import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 flex flex-col items-center justify-center min-h-[50vh]">
      <motion.h1
        whileInView={{ opacity: 1, y: 1 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-2/3">
        {/* <motion.div
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center lg:w-1/2 w-full mb-4 lg:mb-0"
        >
          {/* <button className="px-4 py-2 bg-violet-700 text-white rounded">
              GET MY CV
            </button> */}
        {/* </motion.div> */}
        <motion.div
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          // className="lg:w-1/2 w-full  text-center lg:text-left"
          className="justify-center"
        >
          <p className="my-2 max-w-xl mx-auto lg:mx-0 block hover:text-purple-400 cursor-pointer">
            yashshinde4343@gmail.com
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
