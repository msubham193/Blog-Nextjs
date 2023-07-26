"use client";
import React, { useState } from "react";
import { SocialModalStore } from "../../../store/SocialModalStore";
import Modal from "./Modal";
import Github from "@/Icons/Github";
import Instagram from "@/Icons/Instagram";
import Facebook from "@/Icons/Facebook";
import Twitter from "@/Icons/Twitter";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ProfileStore } from "../../../store/ProfileStore";

const SocialModal = () => {
  const socialModal: any = SocialModalStore();
  const session: any = useSession();
  const profile: any = ProfileStore();
  const [link, setLink] = useState({
    github: "",
    instagram: "",
    facebook: "",
    twitter: "",
  });
  const [loading, setLoading] = useState(false);
  const onSocialModalBtnClick = async () => {
    setLoading(true);
    try {
      await axios.put(`/api/user/update?id=${session?.data?.user?.id}`, {
        link,
      });
      profile.setSuccess();
      socialModal.setClose();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const content = (
    <div className="flex flex-col gap-5 items-center justify-center  w-full">
      <div className="flex gap-2">
        <Github />
        <input
          className="border rounded-lg border-gray-500 px-1 text-sm"
          onChange={(e) => setLink({ ...link, github: e.target.value })}
        ></input>
      </div>
      <div className="flex gap-2">
        <Instagram />
        <input
          className="border rounded-lg border-gray-500 px-1 text-sm"
          onChange={(e) => setLink({ ...link, instagram: e.target.value })}
        ></input>
      </div>
      <div className="flex gap-2">
        <Facebook />
        <input
          className="border rounded-lg border-gray-500 px-1 text-sm"
          onChange={(e) => setLink({ ...link, facebook: e.target.value })}
        ></input>
      </div>
      <div className="flex gap-2">
        <Twitter />
        <input
          className="border rounded-lg border-gray-500 px-1 text-sm"
          onChange={(e) => setLink({ ...link, twitter: e.target.value })}
        ></input>
      </div>
      <button
        className="border  bg-slate-300 p-2 rounded-xl font-semibold w-24  text-xs"
        onClick={onSocialModalBtnClick}
      >
        {loading ? "Updating.." : " Add"}
      </button>
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
