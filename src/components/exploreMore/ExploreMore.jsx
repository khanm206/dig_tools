import React from "react";
import { motion } from "framer-motion";

const ExploreMore = () => {
  return (
    <motion.section
      className="bg-linear-to-r from-primary via-[#4F39F6] to-[#9241c8] text-white"
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="space-y-4 lg:w-10/12 md:mx-6 mx-4 lg:mx-auto py-30">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-center lg:text-lg text-sm text-white/80">
          Join thousands of professionals who are already using Digtools to work
          smarter.
          <br />
          Start your free trial today.
        </p>
        <br />
        <div className="flex gap-4 justify-center">
          <button className="btn rounded-4xl bg-white text-[#4F39F6] md:text-sm text-xs">
            Explore Products
          </button>
          <button className="btn rounded-4xl bg-[#4F39F6] text-white border border-white md:text-sm text-xs">
            View Pricing
          </button>
        </div>
        <p className="text-center lg:text-lg text-sm text-white/80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </motion.section>
  );
};

export default ExploreMore;
