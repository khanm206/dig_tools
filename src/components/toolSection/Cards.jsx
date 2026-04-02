import React, { use } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Cards = ({ dataPromise, chart, setChart }) => {
  const data = use(dataPromise);
  const tools = data.data;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
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

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {tools.map((tool, index) => (
        <motion.div
          key={tool.id}
          variants={cardVariants}
          className={`${
            index === tools.length - 1 && tools.length % 2 !== 0
              ? "md:col-span-2 lg:col-span-1 md:w-[50%] lg:w-auto md:mx-auto"
              : ""
          }`}
        >
          <Card tool={tool} tools={tools} chart={chart} setChart={setChart} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
