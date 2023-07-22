"use client";
import Reder from "@/Icons/Reder";
import React from "react";
import Lottie from "lottie-react";
import alien from "../../../Animation/json/alien.json";
import Animation from "@/Animation/Animation";
const SubscriptionCard = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: alien,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-slate-100 flex items-center justify-between p-5 rounded-lg shadow-md max-w-sm">
      <div>
        <h1 className="font-semibold">
          Get unlimited access to everything on Story
        </h1>
        <p className="text-xs mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque,
          dolorem.
        </p>
        <button className="bg-slate-300 rounded-lg hover:bg-slate-400 transition-all duration-300 ease-in-out  text-sm p-2 mt-3">
          Subscribe Now
        </button>
      </div>
      <div>
        <Animation animationData={alien} classes=""></Animation>
      </div>
    </div>
  );
};

export default SubscriptionCard;
