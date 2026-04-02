import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";

const Status = () => {
  const controls = useAnimation();

  const [users, setUsers] = useState(0);
  const [tools, setTools] = useState(0);
  const [rating, setRating] = useState(0);

  const animateNumber = (target, setter, duration = 1500) => {
    let start = 0;
    const increment = target / (duration / 20);
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(counter);
      } else {
        setter(Math.floor(start));
      }
    }, 20);
  };

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });

    animateNumber(50000, setUsers);
    animateNumber(200, setTools);
    animateNumber(49, setRating);
  }, []);

  return (
    <motion.div
      className="bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] overflow-x-hidden"
      initial={{ x: "100%", opacity: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="lg:mx-auto text-center text-white flex justify-around items-center mx-4 md:mx-6 lg:w-10/12 py-10 md:py-20 mt-10">
        <div className="space-y-1 lg:space-y-3">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold">
            {users.toLocaleString()}+
          </h2>
          <p className="lg:text-2xl text-xs md:text-lg font-semibold">
            Active Users
          </p>
        </div>

        <div className="w-0.5 h-24 bg-gray-400"></div>

        <div className="space-y-1 lg:space-y-3">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold">
            {tools}+
          </h2>
          <p className="lg:text-2xl text-xs md:text-lg font-semibold">
            Premium Tools
          </p>
        </div>

        <div className="w-0.5 h-24 bg-gray-400"></div>

        <div className="space-y-1 lg:space-y-3">
          <h2 className="lg:text-5xl text-2xl md:text-3xl font-bold flex items-center justify-center">
            {(rating / 10).toFixed(1)}
            <Star></Star>
          </h2>
          <p className="lg:text-2xl text-xs md:text-lg font-semibold">
            Average Rating
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Status;
