"use client";
import React from "react";
import Lottie from "lottie-react";
const Animation = ({
  animationData,
  classes,
}: {
  animationData: any;
  classes: string;
}) => {
  return (
    <div className="h-30 w-30 bg-red-300">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default Animation;
