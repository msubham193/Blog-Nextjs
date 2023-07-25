"use client";
import React from "react";
import SubscriptionCard from "./content/SubscriptionCard";
import UserCard from "./content/UserCard";
import { usePathname } from "next/navigation";
import UserProfile from "./content/UserProfile";

const Sidebar = () => {
  const pathname = usePathname();
  console.log();
  return (
    <div className=" shadow-xl border-black  fixed  top-24 right-0 h-screen min-w-[35%] p-10">
      {pathname.split("/")[1] == "profile" ? (
        <UserProfile />
      ) : (
        <div className="">
          <SubscriptionCard />
          <UserCard />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
