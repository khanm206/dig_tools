import React from "react";
import StepsHeader from "./StepsHeader";

const Steps = () => {
  return (
    <section className="bg-[#F9FAFC] py-20">
      <StepsHeader></StepsHeader>
      <div className="w-10/12 mx-auto grid grid-cols-3 gap-6">
        <div className="hover-3d">
          {/* content */}
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200 drop-shadow-sm">
            <div className="flex justify-end">
              <p className="rounded-full bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-fit px-4 py-2 text-xl">
                1
              </p>
            </div>
            <div className="p-10 text-center space-y-4">
              <img
                className="bg-[#4F39F6]/20 rounded-full p-4 mx-auto"
                src="../../../src/assets/user.png"
                alt="user"
              />
              <h2 className="text-3xl font-semibold">Create Account</h2>
              <p className="text-xl text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200 drop-shadow-sm">
            <div className="flex justify-end">
              <p className="rounded-full bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-fit px-4 py-2 text-xl">
                2
              </p>
            </div>
            <div className="p-10 text-center space-y-4">
              <img
                className="bg-[#4F39F6]/20 rounded-full p-4 mx-auto"
                src="../../../src/assets/package.png"
                alt="user"
              />
              <h2 className="text-3xl font-semibold">Choose Products</h2>
              <p className="text-xl text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          {/* content */}
          <div className="bg-white p-4 rounded-xl border-2 border-gray-200 drop-shadow-sm">
            <div className="flex justify-end">
              <p className="rounded-full bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-fit px-4 py-2 text-xl">
                3
              </p>
            </div>
            <div className="p-10 text-center space-y-4">
              <img
                className="bg-[#4F39F6]/20 rounded-full p-4 mx-auto"
                src="../../../src/assets/rocket.png"
                alt="user"
              />
              <h2 className="text-3xl font-semibold">Start Creating</h2>
              <p className="text-xl text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
          {/* 8 empty divs needed for the 3D effect */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
