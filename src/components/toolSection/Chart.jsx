import React from "react";
import ChartCard from "./ChartCard";
import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chart = ({ chart, setChart }) => {
  const total = chart.reduce((sum, item) => sum + item.price, 0);

  const handleBtn = () => {
    setChart([]);
    toast.success(`${chart.length} product(s) proceed to checkout`);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: [50, -10, 0],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { y: -50, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const footerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: [30, -5, 0],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { y: -30, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  };

  const emptyVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: [50, -10, 0],
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: { y: -50, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg lg:px-10 md:px-8 px-6 py-18">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold">Your Chart</h2>

      <AnimatePresence mode="wait">
        {chart.length > 0 ? (
          <motion.div
            key="chart-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-6"
          >
            {/* Chart Cards */}
            {chart.map((product) => (
              <motion.div key={product.id} variants={cardVariants} layout>
                <ChartCard
                  product={product}
                  chart={chart}
                  setChart={setChart}
                />
              </motion.div>
            ))}

            {/* Total */}
            <motion.div
              variants={footerVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex items-center justify-between mt-6"
            >
              <p className="md:text-2xl text-lg">Total</p>
              <p className="lg:text-4xl md:text-3xl text-xl font-semibold">
                £{total}
              </p>
            </motion.div>

            {/* Checkout Button */}
            <motion.button
              onClick={handleBtn}
              variants={footerVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-full py-4 md:py-6 mt-12 md:text-xl text-sm"
            >
              Proceed to Checkout
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="empty-cart"
            variants={emptyVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center lg:text-3xl md:text-xl text-lg bg-gray-300/30 md:px-6 px-4 md:py-20 py-10 rounded-lg mt-6 md:mb-12"
          >
            <ShoppingCart className="mx-auto mb-10" size={88} />
            <span className="lg:text-5xl md:text-3xl text-3xl">
              Your Cart Is Empty!
            </span>
            <br />
            <br />
            Select the products you want to purchase and click the "Buy Now"
            button. Your selected items will appear here, allowing you to review
            your choices before proceeding to checkout.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chart;
