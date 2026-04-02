import React, { use } from "react";
import MembershipCard from "./MembershipCard";

const MembershipCards = ({ membershipDataPromise }) => {
  const { data } = use(membershipDataPromise);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-6 gap-18">
      {data.map((res) => (
        <MembershipCard key={res.id} res={res} data={data}></MembershipCard>
      ))}
    </div>
  );
};

export default MembershipCards;
