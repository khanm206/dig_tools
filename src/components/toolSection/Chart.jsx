import React from "react";
import ChartCard from "./ChartCard";
import { toast } from "react-toastify";

const Chart = ({ chart, setChart }) => {
  const total = chart.reduce((sum, item) => sum + item.price, 0);

  const handleBtn = () => {
    setChart([]);
    toast.success(`${chart.length} product(s) proceed to checkout`);
  };

  return (
    <div className=" border-2 border-gray-300 rounded-lg px-10 py-18">
      <h2 className="text-4xl font-bold">Your Chart</h2>
      {chart.length > 0 ? (
        <div>
          {chart.map((product) => (
            <ChartCard
              key={product.id}
              product={product}
              chart={chart}
              setChart={setChart}
            ></ChartCard>
          ))}
          <div className="flex items-center justify-between">
            <p className="text-2xl">Total</p>
            <p className="text-4xl font-semibold">£{total}</p>
          </div>
          <button
            onClick={handleBtn}
            className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-full py-6 mt-12 text-xl"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="text-center text-3xl bg-gray-300/30 px-6 py-20 rounded-lg mt-6 mb-12">
          Select the products you want to purchase and click the "Buy Now"
          button. Your selected items will appear here, allowing you to review
          your choices before proceeding to checkout.
        </div>
      )}
    </div>
  );
};

export default Chart;
