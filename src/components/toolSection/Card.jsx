import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Card = ({ tool, chart, setChart, tools }) => {
  const [purchaseBtnClicked, setPurchaseBtnClicked] = useState(false);
  const clickedHandler = () => {
    let status = !purchaseBtnClicked;
    if (chart.some((item) => item.id === tool.id)) {
      status = false;
    }
    setPurchaseBtnClicked(status);
    if (status) {
      setChart([...chart, tool]);
      toast.success(`${tool.name} added to chart!`);
    } else {
      setChart(chart.filter((item) => item.id !== tool.id));
      toast.error(`${tool.name} removed from chart!`);
    }
  };
  let badgeColor = "";
  if (tool.tag === "New") {
    badgeColor = "success";
  } else if (tool.tag === "Popular") {
    badgeColor = "primary";
  } else {
    badgeColor = "warning";
  }
  return (
    <div className={`h-full`}>
      <div className="hover-3d w-full h-full border border-gray-200 rounded-lg">
        <div className="card w-full bg-base-100 shadow-sm">
          <div className="card-body space-y-4">
            <div className="flex justify-end">
              <span
                className={`badge badge-xs badge-soft badge-${badgeColor} p-3`}
              >
                {tool.tag}
              </span>
            </div>
            <div className="p-2 border-2 w-fit rounded-full border-gray-300 text-2xl">
              {tool.icon}
            </div>
            <h2 className="md:text-3xl text-2xl font-bold">{tool.name}</h2>

            <p className="text-base-content/70">{tool.description}</p>
            <h3 className="md:text-3xl text-2xl font-black">
              £{tool.price}{" "}
              <span className="md:text-xl text-lg font-normal">
                /{tool.period}
              </span>
            </h3>
            <ul className="mt-6 flex flex-col gap-2 text-xs h-full">
              {tool.features.map((feature, index) => {
                return (
                  <li key={index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <motion.button
                onClick={clickedHandler}
                className={`btn rounded-4xl text-white btn-block overflow-x-hidden ${
                  purchaseBtnClicked ||
                  chart.some((item) => item.id === tool.id)
                    ? "bg-linear-to-r from-[#9241c8] via-[#4F39F6] to-primary"
                    : "bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8]"
                }`}
                initial={{ scale: 1 }}
                whileInView={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 10px rgba(255,255,255,0.7)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: false }}
              >
                {purchaseBtnClicked || chart.some((item) => item.id === tool.id)
                  ? "Purchased"
                  : "Buy Now"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
