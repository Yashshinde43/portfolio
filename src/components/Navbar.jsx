import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20 ">
      <div className="flex items-center flex-shrink-0 text-5xl cursor-pointer bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">
        Ys.
      </div>
      <div className="flex items-center justify-center m-8 gap-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/yash-shinde-a3127028a/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Yashshinde43" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/yash1310_/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
