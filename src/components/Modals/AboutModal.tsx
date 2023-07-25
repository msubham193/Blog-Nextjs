"use client";
import React from "react";
import Modal from "./Modal";
import { AboutModalStore } from "../../../store/AboutModalStore";

const AboutModal = () => {
  const aboutModal: any = AboutModalStore();
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
      isOpen={aboutModal.isOpen}
      title="Add About ✏️"
      handleClose={aboutModal.setClose}
      button={""}
      content={content}
    />
  );
};

export default AboutModal;
