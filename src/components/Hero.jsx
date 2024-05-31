import React from "react";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import ProfilePic from "../assets/yash.jpg"
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
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl pb-16 font-thin  tracking-tight mt-16 lg:text-8xl"
            >
              Yash Shinde
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              F
              className="tracking-tight bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500  bg-clip-text text-4xl text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light sm:text-normal lg:text-justify text-justify"
            >
              {HERO_CONTENT}
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
      </div>
    </div>
  );
};

export default Hero;
