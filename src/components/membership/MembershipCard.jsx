import React from "react";

const MembershipCard = ({ res }) => {
  return (
    <div className="h-full relative z-0">
      <div
        className={`${!res.tag ? "hidden" : "badge badge-warning text-xl text-gray py-4 mx-auto absolute z-10 -top-[5%] left-[32%]"}`}
      >
        {res.tag ? res.tag : ""}
      </div>
      <div className="hover-3d w-full h-full">
        <div
          className={`card ${res.tag ? "bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white" : "bg-base-200"} shadow-sm`}
        >
          <div className="card-body space-y-4">
            <h2 className="text-3xl font-bold">{res.name}</h2>

            <p className="text-base">{res.description}</p>
            <h3 className="text-3xl font-black">
              £{res.price} <span className="text-xl font-normal">/Month</span>
            </h3>
            <ul className="mt-6 flex flex-col gap-2 text-xs h-full">
              {res.features.map((feature, index) => {
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
                className={`btn rounded-4xl ${!res.tag ? "bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white" : "bg-white text-[#4F39F6]"} btn-block`}
              >
                {res.btn}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
