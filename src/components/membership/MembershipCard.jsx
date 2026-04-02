import React from "react";

const MembershipCard = ({ res, data }) => {
  return (
    <div
      className={`h-full relative z-0 md:mx-auto ${res.id === data.length && data.length / 2 !== 0 && "md:col-span-2 md:w-[50%] lg:col-span-1 lg:w-auto"}`}
    >
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
            <h2 className="md:text-3xl text-2xl font-bold">{res.name}</h2>

            <p className="text-base">{res.description}</p>
            <h3 className="md:text-3xl text-2xl font-black">
              £{res.price}{" "}
              <span className="md:text-xl text-lg font-normal">/Month</span>
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
