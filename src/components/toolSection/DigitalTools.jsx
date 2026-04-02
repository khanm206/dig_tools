import axios from "axios";
import React, { Suspense, useState } from "react";
import Cards from "./Cards";
import ToolSectionHeader from "./ToolSectionHeader";
import Chart from "./Chart";
import { motion, AnimatePresence } from "framer-motion";

const dataPromise = axios.get("/data.json");
const DigitalTools = ({ chart, setChart }) => {
  const [selectedBtn, setSelectedBtn] = useState("products");
  return (
    <motion.section
      className="lg:w-10/12 lg:mx-auto my-40 mx-4 md:mx-6"
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <ToolSectionHeader
        chart={chart}
        selectedBtn={selectedBtn}
        setSelectedBtn={setSelectedBtn}
      ></ToolSectionHeader>

      <AnimatePresence mode="wait">
        {selectedBtn === "products" ? (
          <motion.div
            key="products"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Suspense
              fallback={
                <span className="loading loading-bars loading-xl mx-auto flex items-center justify-center mt-18"></span>
              }
            >
              <Cards
                dataPromise={dataPromise}
                chart={chart}
                setChart={setChart}
              />
            </Suspense>
          </motion.div>
        ) : (
          <motion.div
            key="chart"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Chart chart={chart} setChart={setChart} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default DigitalTools;
