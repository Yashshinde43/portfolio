import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
        {/* <span className="text-neutral-500"> Me</span> */}
      </motion.h1>
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-start items-center">
            <h1 className="text-2xl mb-3 tracking-tight">
              Shri Shankaracharya Institute of Professional Management and
              Technology, Raipur
            </h1>
          </div>
          <p className="mb-2 text-xl text-neutral-400">Bachelor of Technology</p>
          <p className="text-neutral-400">SEPTEMBER 2021 - ONGOING</p>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-start items-center">
            <h1 className="text-2xl mb-2">
              Davara International School, Raipur
            </h1>
          </div>
          <p className="mb-1 text-neutral-400">12th</p>
          <p className="mb-1 text-neutral-400">JUNE 2020 - MARCH 2021</p>
          <p className="text-neutral-400">PERCENTAGE SCORED - 90.2%</p>
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-start items-center">
            <h1 className="text-2xl mb-2">Montfort School</h1>
          </div>
          <p className="mb-1 text-neutral-400">10th</p>
          <p className="mb-1 text-neutral-400">JUNE 2018 - MARCH 2019</p>
          <p className="text-neutral-400">PERCENTAGE SCORED - 84.2%</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
