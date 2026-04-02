import React from "react";
import { toast } from "react-toastify";

const ChartCard = ({ product, chart, setChart }) => {
  const handleBtn = () => {
    setChart(chart.filter((p) => p.id !== product.id));
    toast.error(`${product.name} removed from the chart`);
  };

  return (
    <div>
      <div className="lg:text-2xl bg-gray-300/30 md:p-6 p-4 rounded-lg mt-6 mb-12 flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="lg:p-4 md:p-2 p-1 border-2 w-fit rounded-full border-gray-300 lg:text-5xl md:text-2xl text-xl bg-white">
            {product.icon}
          </div>
          <div className="w-full md:w-auto">
            <h2 className="lg:text-3xl md:text-2xl text-lg font-bold mb-2">
              {product.name}
            </h2>

            <div className="flex justify-between w-full md:hidden">
              <p className="text-lg">£{product.price}</p>
              <button
                onClick={handleBtn}
                className="cursor-pointer text-red-600 font-bold"
              >
                Remove
              </button>
            </div>

            <p className="text-xl hidden md:flex">£{product.price}</p>
          </div>
        </div>
        <button
          onClick={handleBtn}
          className="cursor-pointer hidden md:flex text-red-600 text-2xl font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ChartCard;
