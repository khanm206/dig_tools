import React, { use } from "react";
import MembershipCard from "./MembershipCard";

const MembershipCards = ({ membershipDataPromise }) => {
  const { data } = use(membershipDataPromise);
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((res) => (
        <MembershipCard key={res.id} res={res}></MembershipCard>
      ))}
    </div>
  );
};

export default MembershipCards;
