"use client";
import React from "react";
import SubscriptionCard from "./content/SubscriptionCard";
import UserCard from "./content/UserCard";
import { usePathname } from "next/navigation";

const SideBarContent = () => {
  const path = usePathname();
  return (
    <div className="">
      <SubscriptionCard />
      <UserCard />
    </div>
  );
};

export default SideBarContent;
