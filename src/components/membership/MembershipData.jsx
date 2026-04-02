import axios from "axios";
import React, { Suspense } from "react";
import MembershipCards from "./MembershipCards";
import MembershipDataHeader from "./MembershipDataHeader";
import { motion } from "framer-motion";

const membershipDataPromise = axios.get("/membership.json");
const MembershipData = () => {
  return (
    <motion.section
      className="lg:w-10/12 md:mx-6 mx-4 lg:mx-auto md:my-40 my-30"
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Suspense
        fallback={
          <div className="flex w-52 flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        }
      >
        <MembershipDataHeader></MembershipDataHeader>

        <MembershipCards
          membershipDataPromise={membershipDataPromise}
        ></MembershipCards>
      </Suspense>
    </motion.section>
  );
};

export default MembershipData;
