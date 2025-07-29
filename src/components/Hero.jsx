import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/yash.jpg";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:mb-35">
{/*       <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl lg:text-8xl pb-8 lg:pb-16 font-thin tracking-tight mt-8 lg:mt-16 text-center lg:text-left"
            >
              Yash Shinde
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-4xl text-transparent text-center lg:text-left"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-full font-light text-base sm:text-lg md:text-xl sm:text-start lg:text-justify  leading-relaxed"
            >
              Passionate developer with hands-on experience in designing and developing scalable web applications using the MERN and Next.js stack. Proficient about clean code, agile collaboration, and delivering customer-focused solutions aligned with organizational goals
   </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center rounded-2xl">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              src={ProfilePic}
              height={100}
              width={500}
              alt="Yash Shinde"
              className="rounded-2xl cursor-pointer"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
