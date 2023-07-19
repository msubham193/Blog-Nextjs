import Image from "next/image";
import React from "react";

interface props {
  avatar: string;
  name: string;
  date: string;
  comment: string;
}

const CommentCard = ({ props }: { props: props }) => {
  return (
    <div className=" w-full  gap-2 p-2 mb-10">
      <div className="flex items-center  gap-3 mb-2">
        <Image
          src={props.avatar}
          alt="user"
          height={30}
          width={30}
          className="rounded-full"
        />

        <div className="">
          <h1 className="text-sm font-bold ">{props?.name}</h1>
          <p className="text-xs tracking-wider">{props?.date}</p>
        </div>
      </div>

      <div className=" border border-gray-300 rounded-md p-3 w-full min-w-max">
        {props?.comment}
      </div>
    </div>
  );
};

export default CommentCard;
