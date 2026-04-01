import React from "react";

const ToolSectionHeader = () => {
  return (
    <div className="mb-16">
      <h1 className="text-5xl font-bold text-center mb-4">
        Premium Digital Tools
      </h1>
      <p className="text-center text-base-content/70 text-lg">
        Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className={`btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white`}
        >
          Products
        </button>
        <button className={`btn rounded-4xl`}>Chart(0)</button>
      </div>
    </div>
  );
};

export default ToolSectionHeader;
