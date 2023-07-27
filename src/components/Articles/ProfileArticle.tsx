"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileArticle = ({ d }: { d: any }) => {
  const router = useRouter();
  return (
    <div className="shadow-md p-3 mt-5" key={d._id}>
      <div
        className=" hidden w-full  md:flex items-center  justify-between gap-4  cursor-pointer "
        onClick={() => router.push(`/post/${d._id}`)}
      >
        <div>
          {" "}
          <h1 className="text-lg font-semibold mt-4">{d.title}</h1>
          <p className="text-xs text-gray-500 mt-2">
            {d.content.slice(0, 350)}
          </p>
        </div>
        <img src={d.image} className="w-52 h-36 rounded-lg" />
      </div>
    </div>
  );
};

export default ProfileArticle;
