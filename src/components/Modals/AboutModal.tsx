"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { AboutModalStore } from "../../../store/AboutModalStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ProfileStore } from "../../../store/ProfileStore";

const AboutModal = () => {
  const aboutModal: any = AboutModalStore();
  const session: any = useSession();

  const [loading, setLoading] = useState(false);

  const profile: any = ProfileStore();

  const [aboutText, setAboutText] = useState("");
  const router = useRouter();
  let mutation: any;
  const OnAboutEdit = async () => {
    setLoading(true);
    try {
      await axios.put(`/api/user/update?id=${session?.data?.user?.id}`, {
        aboutText,
      });
      profile.setSuccess();
      aboutModal.setClose();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const content = (
    <div className="flex flex-col items-center justify-center  w-full">
      <textarea
        id=""
        cols={50}
        rows={5}
        name={aboutText}
        value={aboutText}
        className="mt-5  w-full rounded-lg border border-slate-500 p-2  focus:outline-none mb-3"
        placeholder="Edit About....."
        onChange={(e) => setAboutText(e.target.value)}
      ></textarea>

      <button
        className="border  bg-slate-300 p-2 rounded-xl font-semibold w-24  text-xs"
        onClick={OnAboutEdit}
      >
        {loading ? "Updating.." : " Add"}
      </button>
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
