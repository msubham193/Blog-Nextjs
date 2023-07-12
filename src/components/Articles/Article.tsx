/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Like from "./Icons/Like";
import Share from "./Icons/Share";
import Comments from "./Icons/Comments";
import { useRouter } from "next/navigation";

const Article = ({ props }: { props: any }) => {
  const { data } = useSession();
  const router = useRouter();
  // console.log(props);
  return (
    <div
      className=" shadow-xl p-5 mt-4 bg-white cursor-pointer "
      onClick={() => router.push(`/post/${props._id}`)}
    >
      <div className="flex items-center  gap-3">
        <Image
          src={props?.author?.avatar}
          alt="user"
          height={30}
          width={30}
          className="rounded-full"
        />

        <div className="">
          <h1 className="text-sm font-bold ">{props?.author?.name}</h1>
          <p className="text-xs tracking-wider">{props?.author?.slug}</p>
        </div>
      </div>

      <div className=" w-full  flex items-center  justify-between gap-4  ">
        <div>
          {" "}
          <h1 className="text-lg font-semibold mt-4">{props.title}</h1>
          <p className="text-xs text-gray-500 mt-2">
            {props.content.slice(0, 350)}
          </p>
        </div>
        <img src={props.image} className="w-52 h-36 rounded-lg" />
      </div>
      <div className="flex  items-center justify-between  mt-3">
        <div className="mt-5 flex items-center gap-4">
          <div className="bg-teal-100 max-w-fit p-2 rounded-full text-xs font-semibold">
            {props.category}{" "}
          </div>
          <div className="bg-red-100 max-w-fit p-2 rounded-full text-xs font-semibold">
            4 min read{" "}
          </div>
        </div>
        <div className="flex items-center gap-8">
          {" "}
          <Share />
          <Comments />
          <Like />
        </div>
      </div>
    </div>
  );
};

export default Article;
