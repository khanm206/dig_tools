import axios from "axios";
import React, { Suspense } from "react";
import MembershipCards from "./MembershipCards";
import MembershipDataHeader from "./MembershipDataHeader";

const membershipDataPromise = axios.get("/membership.json");
const MembershipData = () => {
  return (
    <section className="lg:w-10/12 md:mx-6 mx-4 lg:mx-auto my-40">
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
    </section>
  );
};

export default MembershipData;
