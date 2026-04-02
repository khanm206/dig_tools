import React from "react";

const Status = () => {
  return (
    <div className="bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8]">
      <div className="lg:mx-auto text-center text-white flex justify-around items-center mx-4 md:mx6 lg:w-10/12 py-10 md:py-20 mt-10">
        <div className="space-y-1 lg:space-y-3">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold">50K+</h2>

          <p className="lg:text-2xl text-xs md:text-lg font-semibold">
            Active Users
          </p>
        </div>
        <div className="w-0.5 h-24 bg-gray-400"></div>
        <div className="space-y-1 lg:space-y-3">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold">200+</h2>

          <p className="lg:text-2xl text-xs md:text-lg font-semibold">
            Premium Tools
          </p>
        </div>
        <div className="w-0.5 h-24 bg-gray-400"></div>
        <div className="space-y-1 lg:space-y-3">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold">4.9</h2>

          <p className="lg:text-2xl text-xs md:text-lg font-semibold">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
