import React, { useState } from "react";

const Card = ({ tool, chart, setChart }) => {
  const [purchaseBtnClicked, setPurchaseBtnClicked] = useState(false);
  const clickedHandler = () => {
    const status = !purchaseBtnClicked;
    setPurchaseBtnClicked(status);
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
    <div className="h-full">
      <div className="hover-3d w-full h-full">
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
            <h2 className="text-3xl font-bold">{tool.name}</h2>

            <p className="text-base-content/70">{tool.description}</p>
            <h3 className="text-3xl font-black">
              ${tool.price}{" "}
              <span className="text-xl font-normal">/{tool.period}</span>
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
              <button
                onClick={clickedHandler}
                className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white btn-block"
              >
                {purchaseBtnClicked ? "Purchased" : "Buy Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
