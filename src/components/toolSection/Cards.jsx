import React, { use } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Cards = ({ dataPromise, chart, setChart }) => {
  const data = use(dataPromise);
  const tools = data.data;

  // Container variants for staggering children
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
        staggerDirection: -1, // reverse exit
      },
    },
  };

  // Each card animation with bounce
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: [50, -10, 0], // move down → up → settle
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
      {tools.map((tool) => (
        <motion.div key={tool.id} variants={cardVariants}>
          <Card tool={tool} tools={tools} chart={chart} setChart={setChart} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Cards;
