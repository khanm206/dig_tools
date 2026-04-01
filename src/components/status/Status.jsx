import React from "react";

const Status = () => {
  return (
    <div className="bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8]">
      <div className="mx-auto text-center text-white flex justify-between items-center w-10/12 py-10 mt-10">
        <div>
          <h2 className="text-5xl font-bold">50K+</h2>
          <br />
          <p className="text-2xl font-semibold">Active Users</p>
        </div>
        <div className="w-0.5 h-24 bg-gray-400"></div>
        <div>
          <h2 className="text-5xl font-bold">200+</h2>
          <br />
          <p className="text-2xl font-semibold">Premium Tools</p>
        </div>
        <div className="w-0.5 h-24 bg-gray-400"></div>
        <div>
          <h2 className="text-5xl font-bold">4.9</h2>
          <br />
          <p className="text-2xl font-semibold">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
