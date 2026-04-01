import React from "react";
import banner from "../../../src/assets/banner.png";
import badge from "../../../src/assets/badge.png";
import play from "../../../src/assets/play.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center">
      <div className="space-y-4 w-1/2">
        <div className="badge badge-soft badge-primary text-xl">
          <img src={badge} />
          New: AI-Powered Tools Available
        </div>
        <h1 className="text-7xl font-bold">
          Supercharge Your <br></br>Digital Workflow
        </h1>
        <p className="text-2xl text-gray-500">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div>
          <button className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-secondary text-white">
            Explore Products
          </button>
          <button className="btn rounded-4xl border border-primary text-primary hover:bg-primary hover:text-white">
            <img src={play} alt="Play" /> Watch Demo
          </button>
        </div>
      </div>

      <div className="">
        <img className="w-full" src={banner} />
      </div>
    </div>
  );
};

export default Banner;
