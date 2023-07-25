"use client";
import React from "react";
import { SocialModalStore } from "../../../store/SocialModalStore";
import Modal from "./Modal";

const SocialModal = () => {
  const socialModal: any = SocialModalStore();

  const content = (
    <div className="flex items-center justify-center  w-full">
      <textarea
        id=""
        cols={50}
        rows={5}
        // name={data.content}
        // value={data.content}
        className="mt-5  w-full rounded-lg border border-slate-500 p-2  focus:outline-none mb-3"
        placeholder="Edit About....."
        // onChange={(e) => setData({ ...data, content: e.target.value })}
      ></textarea>
    </div>
  );
  return (
    <Modal
      isOpen={socialModal.isOpen}
      title="Add Socials 👑"
      handleClose={socialModal.setClose}
      button={""}
      content={content}
    />
  );
};

export default SocialModal;
