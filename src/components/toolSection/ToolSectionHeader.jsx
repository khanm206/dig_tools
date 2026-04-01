import React from "react";

const ToolSectionHeader = ({ selectedBtn, setSelectedBtn, chart }) => {
  const handleBtnClick = (btnName) => {
    const status = btnName;
    setSelectedBtn(status);
  };
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
          onClick={() => handleBtnClick("products")}
          className={`btn rounded-4xl ${selectedBtn === "products" ? "bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white" : "bg-base-100 text-base-content"}`}
        >
          Products
        </button>
        <button
          onClick={() => handleBtnClick("chart")}
          className={`btn rounded-4xl ${selectedBtn === "chart" ? "bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white" : "bg-base-100 text-base-content"}`}
        >
          Chart({chart.length})
        </button>
      </div>
    </div>
  );
};

export default ToolSectionHeader;
