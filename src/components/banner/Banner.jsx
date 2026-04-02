import React from "react";
import banner from "../../../src/assets/banner.png";
import badge from "../../../src/assets/badge.png";
import play from "../../../src/assets/play.png";

const Banner = () => {
  return (
    <div className="lg:w-10/12 mx-4 md:mx-6 lg:mx-auto flex justify-between items-center lg:my-20 my-10">
      <div className="space-y-6 lg:w-1/2 text-center lg:text-left bg-[url('../../../src/assets/banner.png')] lg:bg-none px-4 lg:px-0 py-6 lg:py-0 rounded-2xl lg:rounded-none bg-cover bg-center bg-no-repeat">
        <div className="badge badge-soft badge-primary md:text-xl">
          <img src={badge} />
          New: AI-Powered Tools Available
        </div>
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
          Supercharge Your <br className="hidden lg:inline"></br>
          Digital Workflow
        </h1>
        <p className="md:text-2xl lg:text-gray-500 text-black bg-white/70 lg:bg-none p-2 lg:p-0">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-4 justify-center lg:justify-start">
          <button className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white">
            Explore Products
          </button>
          <button className="btn rounded-4xl border border-primary text-primary hover:bg-primary hover:text-white">
            <img src={play} alt="Play" /> Watch Demo
          </button>
        </div>
      </div>

      <div className=" hidden lg:flex">
        <img className="w-full" src={banner} />
      </div>
    </div>
  );
};

export default Banner;
