import React from "react";
import ChartCard from "./ChartCard";
import { toast } from "react-toastify";
import { ChartBar, ShoppingBag, ShoppingCart } from "lucide-react";

const Chart = ({ chart, setChart }) => {
  const total = chart.reduce((sum, item) => sum + item.price, 0);

  const handleBtn = () => {
    setChart([]);
    toast.success(`${chart.length} product(s) proceed to checkout`);
  };

  return (
    <div className=" border-2 border-gray-300 rounded-lg lg:px-10 md:px-8 px-6 py-18">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">Your Chart</h2>
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
            <p className="md:text-2xl text-lg">Total</p>
            <p className="lg:text-4xl md:text-3xl text-xl font-semibold">
              £{total}
            </p>
          </div>
          <button
            onClick={handleBtn}
            className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-full py-4 md:py-6 mt-12 md:text-xl text-sm"
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="text-center lg:text-3xl md:text-xl text-lg bg-gray-300/30 md:px-6 px-4 md:py-20 py-10 rounded-lg mt-6 md:mb-12">
          <ShoppingCart className="mx-auto mb-10" size={88}></ShoppingCart>
          <span className="lg:text-5xl md:text-3xl text-3xl">
            Your Cart Is Empty!
          </span>
          <br />
          <br />
          Select the products you want to purchase and click the "Buy Now"
          button. Your selected items will appear here, allowing you to review
          your choices before proceeding to checkout.
        </div>
      )}
    </div>
  );
};

export default Chart;
