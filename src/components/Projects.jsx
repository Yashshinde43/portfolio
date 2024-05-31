import React from "react";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="border-b border-neutral-700 pb-4">
      <motion.h1 
         whileInView={{ opacity: 1, y: 1 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img src={project1} width={350} height={350} className="mb-6 rounded" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Music School</h6>
            <p className="mb-4 text-neutral-400">
              A beautifully designed music school platform that offers
              interactive lessons. Features a stunning UI to enhance user engagement and learning
              experience.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              nextjs
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Aceternity UI
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
              Tailwind CSS
            </span>

            <div className="mt-4 mr-2">
              <div className="mb-2">
                <a
                  href="https://musical-school-nextjs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FaExternalLinkAlt />
                  <span className="ml-2"></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <img src={project2} width={350} height={350} className="mb-6 rounded" />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold">File Drop</h6>
          <p className="mb-4 text-neutral-400">
            A firebase storage platform that allows users to securely upload and
            access files from anywhere, mimicking the functionality of Dropbox.
          </p>
          <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            nextjs
          </span>
          <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Tailwind CSS
          </span>
          <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Firebase
          </span>
          <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Clerk Auth
          </span>
          <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">
            Shadcn
          </span>

          <div className="mt-4 mr-2">
            <div className="mb-2">
              <a
                href="https://dropbox-wine.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaExternalLinkAlt />
                <span className="ml-2"></span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
