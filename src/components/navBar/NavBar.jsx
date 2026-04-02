import React from "react";
import logo from "../../../src/assets/logo.png";
import { ShoppingCart } from "lucide-react";

const NavBar = ({ chart }) => {
  return (
    <>
      <section className="md:h-15 h-10 flex justify-center">
        <div className=" fixed w-full mx-auto z-10 top-0">
          <div className="max-w-450 mx-auto bg-base-100 shadow-sm">
            <div className="navbar lg:w-11/12 mx-auto">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />{" "}
                    </svg>
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a>Products</a>
                    </li>
                    <li>
                      <a>Features</a>
                    </li>
                    <li>
                      <a>Pricing</a>
                    </li>
                    <li>
                      <a>Testimonials</a>
                    </li>
                    <li>
                      <a>FAQ</a>
                    </li>
                    <li>
                      <a>Login</a>
                    </li>
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                  <img src={logo} alt="logo" className="w-18 md:w-26" />
                </a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a>Products</a>
                  </li>
                  <li>
                    <a>Features</a>
                  </li>
                  <li>
                    <a>Pricing</a>
                  </li>
                  <li>
                    <a>Testimonials</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-end gap-2 md:gap-4">
                <div className="relative">
                  <p
                    className={`badge badge-error text-white  ${chart.length > 0 ? "absolute" : "hidden"}  rounded-full p-1 left-[55%] -top-[20%] animate-bounce h-4`}
                  >
                    {chart.length}
                  </p>
                  <ShoppingCart size={22}></ShoppingCart>
                </div>
                <button className="btn bg-white hidden md:flex items-center gap-2 text-[12px] md:text-sm">
                  Login
                </button>
                <button className="btn rounded-4xl bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white w-fit md:w-auto text-[10px] md:text-sm">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
