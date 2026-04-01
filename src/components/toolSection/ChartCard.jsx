import React from "react";
import { toast } from "react-toastify";

const ChartCard = ({ product, chart, setChart }) => {
  const handleBtn = () => {
    setChart(chart.filter((p) => p.id !== product.id));
    toast.error(`${product.name} removed from the chart`);
  };

  return (
    <div>
      <div className="text-2xl bg-gray-300/30 p-6 rounded-lg mt-6 mb-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-4 border-2 w-fit rounded-full border-gray-300 text-5xl bg-white">
            {product.icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>

            <p className="text-xl">£{product.price}</p>
          </div>
        </div>
        <button
          onClick={handleBtn}
          className="cursor-pointer text-red-600 text-2xl font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ChartCard;
