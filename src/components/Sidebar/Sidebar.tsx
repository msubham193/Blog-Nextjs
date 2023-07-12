import React from "react";
import SubscriptionCard from "./content/SubscriptionCard";

const Sidebar = () => {
  return (
    <div className=" shadow-xl border-black  fixed  top-24 right-0 h-screen min-w-[35%] p-10">
      <SubscriptionCard />
    </div>
  );
};

export default Sidebar;
