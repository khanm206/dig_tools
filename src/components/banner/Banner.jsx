import React from "react";
import banner from "../../../src/assets/banner.png";
import badge from "../../../src/assets/badge.png";
import play from "../../../src/assets/play.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      className="lg:w-10/12 mx-4 md:mx-6 lg:mx-auto flex justify-between items-center flex-col lg:flex-row lg:my-20 mb-10 mt-4 max-h-screen overflow-hidden"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className={`space-y-6 lg:w-1/2 text-center lg:text-left px-4 lg:px-0 py-6 lg:py-0 rounded-2xl lg:rounded-none`}
      >
        <div className="badge badge-soft badge-primary p-4 md:text-xl">
          <img className="animate-pulse" src={badge} />
          New: AI-Powered Tools Available
        </div>
        <div className="-2 lg:p-0 space-y-6">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
            Supercharge Your <br className="hidden lg:inline"></br>
            Digital Workflow
          </h1>
          <p className="md:text-2xl lg:text-gray-500 text-black">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white">
            Explore Products
          </button>
          <button className="btn rounded-4xl border border-primary text-primary hover:bg-primary hover:text-white">
            <img className="animate-pulse" src={play} alt="Play" /> Watch Demo
          </button>
        </div>
      </div>

      <div className="w-full lg:w-auto h-96 lg:h-auto">
        <img
          className="w-full h-full object-cover object-center rounded-2xl"
          src={banner}
        />
      </div>
    </motion.div>
  );
};

export default Banner;
