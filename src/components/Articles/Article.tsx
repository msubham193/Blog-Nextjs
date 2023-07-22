/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Like from "./Icons/Like";
import Share from "./Icons/Share";
import Comments from "./Icons/Comments";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LoginModalStore } from "../../../store/LoginModalStore";
import Edit from "./Icons/Edit";
import Delete from "./Icons/Delete";
import Link from "next/link";
import Liked from "./Icons/Liked";

const Article = ({ props }: { props: any }) => {
  const { data }: any = useSession();

  const loginModal: any = LoginModalStore();
  const router = useRouter();

  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(props.likes.length);

  useEffect(() => {
    setIsLiked(props.likes?.includes(data?.user?.id) ? true : false);
    setLike(props.likes.length);
  }, [props.likes, data?.user?.id]);

  const onLiked = async () => {
    if (!data) {
      loginModal.setOpen();
      return;
    }

    setIsLiked(!isLiked);
    setLike(!isLiked ? like + 1 : like - 1);
    await axios
      .put(`api/post/like?id=${props._id}`)
      .then(() => router.refresh())
      .catch((error) => console.log(error));
  };
  const onDelete = async () => {
    await axios
      .delete(`api/post/delete?id=${props._id}`)
      .then(() => router.refresh())
      .catch((error) => console.log(error));
  };

  return (
    <div className=" shadow-lg p-5 mt-4 bg-white cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out ">
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

      <div
        className=" w-full  flex items-center  justify-between gap-4  "
        onClick={() => router.push(`/post/${props._id}`)}
      >
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
          {props.author.id === data?.user.id ? (
            <div className="flex items-center gap-8 justify-center">
              <Delete onClick={onDelete} />
              <Link href={`/uploadbutton/update`}>
                {" "}
                <Edit />
              </Link>
            </div>
          ) : (
            ""
          )}
          <Share />
          <div className="flex items-center justify-center gap-1">
            {" "}
            <Comments />
            <p className="text-slate-500 text-sm">{props.comments.length}</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            {isLiked ? <Liked onClick={onLiked} /> : <Like onClick={onLiked} />}
            <p className="text-slate-500 text-sm">{like}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
