import React from "react";

const UserSingleSkeleton = () => {
  return (
    <div className="w-full rounded-md flex justify-between items-center mb-2   p-3 shadow-md">
      <div className="flex items-center  gap-3">
        <div className="rounded-full h-8 w-8 bg-slate-500 animate-pulse" />

        <div className="">
          <div className="text-sm font-bold hover:underline cursor-pointer bg-slate-500 w-16 h-4 animate-pulse"></div>
          <p className="text-xs tracking-wider bg-slate-500 mt-1 w-16 h-4 animate-pulse">
            {" "}
          </p>
        </div>
      </div>
      <div className="border  bg-slate-500 p-2 rounded-md  font-semibold w-16 h-7 animate-pulse  text-xs"></div>
    </div>
  );
};

export default UserSingleSkeleton;
