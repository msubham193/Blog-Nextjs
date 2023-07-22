import React from "react";
import SubscriptionCard from "./content/SubscriptionCard";
import UserCard from "./content/UserCard";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  return (
    <div className=" shadow-xl border-black  fixed  top-24 right-0 h-screen min-w-[35%] p-10">
      <div className="">
        <SubscriptionCard />
        <UserCard />
      </div>
    </div>
  );
};

export default Sidebar;
