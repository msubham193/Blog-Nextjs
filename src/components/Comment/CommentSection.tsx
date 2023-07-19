"use client";
import SinglePost from "@/app/post/[slug]/page";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { useSession } from "next-auth/react";
import { LoginModalStore } from "../../../store/LoginModalStore";
import axios from "axios";
import { useRouter } from "next/navigation";

const CommentSection = ({ id, post }: { id: string; post: any }) => {
  const router = useRouter();
  const [cmnt, setCmnt] = useState("");
  const [disable, setDisable] = useState(cmnt.length == 0 ? true : false);

  const { data }: any = useSession();

  const loginModal: any = LoginModalStore();

  useEffect(() => {
    cmnt.length == 0 ? setDisable(true) : setDisable(false);
  }, [cmnt.length]);
  const onCmntChange = (e: any) => {
    setDisable(false);

    setCmnt(e.target.value);
  };
  const onCommentSubmit = async () => {
    try {
      const { data } = await axios.put(`/api/post/comment?id=${id}`, { cmnt });

      router.refresh();
      setCmnt("");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1 className=" text-xl font-[800] mt-5">Top Comments</h1>
      <textarea
        name={cmnt}
        value={cmnt}
        cols={30}
        rows={5}
        className="w-full mt-5 border border-gray-500 rounded-lg p-2"
        placeholder="Add Comment.. "
        onChange={onCmntChange}
        onClick={() => (!data ? loginModal.setOpen() : null)}
      ></textarea>

      <div className="mt-3">
        <button
          disabled={disable}
          className={`${
            disable ? "bg-gray-600 cursor-not-allowed" : "bg-black "
          } p-2 text-sm text-white rounded-lg  `}
          onClick={onCommentSubmit}
        >
          Submit
        </button>
      </div>

      <div className="mt-14">
        {post.comments.map((d: any) => (
          <CommentCard key={d.id} props={d} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
