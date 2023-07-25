/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Facebook from "@/Icons/Facebook";
import Github from "@/Icons/Github";
import Instagram from "@/Icons/Instagram";
import Social from "@/Icons/Instagram";
import Linkdin from "@/Icons/Linkdin";
import Twitter from "@/Icons/Twitter";
import Edit from "@/components/Articles/Icons/Edit";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";
import React from "react";
import { AboutModalStore } from "../../../../store/AboutModalStore";
import { SocialModalStore } from "../../../../store/SocialModalStore";

const UserProfile = () => {
  const pathname = usePathname();

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/user/fetch?id=${pathname.split("/")[2]}`
      );

      return data.user;
    },
  });

  const aboutModal: any = AboutModalStore();
  const socialModal: any = SocialModalStore();
  const onAboutEdit = () => {
    aboutModal.setOpen();
  };
  const onSocialIconEdit = () => {
    socialModal.setOpen();
  };

  return (
    <div className="shadow-md mt-10 max-w-sm  rounded-lg   ">
      <div className="relative flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/abstract-orange-background-with-lines-halftone-effect_1017-32107.jpg?size=626&ext=jpg&ga=GA1.2.850850250.1686201740&semt=ais"
          className=" w-full h-24  opacity-80  "
        ></img>
        <img
          src={data?.image}
          alt=""
          className="h-16 w-16 absolute bottom-[-20px] rounded-full"
        />
      </div>
      <h1 className="text-center mt-8">{data?.name}</h1>
      <div className="p-2 text-center text-xs text-slate-500">
        {!data?.about?.length ? (
          <div
            className="flex gap-1 items-center justify-center text-sm font-bold text-gray-500"
            onClick={onAboutEdit}
          >
            <Edit />
            Add About
          </div>
        ) : (
          data?.about
        )}
      </div>
      <div className="flex text-sm w-full gap-10 items-center justify-center mt-5 mb-5 font-bold ">
        <h1>{data?.followers?.length} Follower</h1>
        <h1>{data?.following?.length} Following</h1>
      </div>
      <div className="px-10 py-2 flex gap-3 items-center justify-center">
        {" "}
        {data?.socials?.github &&
        data?.socials?.instagram &&
        data?.socials?.twitter &&
        data?.socials?.facebook ? (
          "flgmlf"
        ) : (
          <div
            className="flex gap-1 text-sm font-extrabold text-gray-500"
            onClick={onSocialIconEdit}
          >
            <Edit />
            Add Social Icons
          </div>
        )}
        {data?.socials?.github ? <Github /> : ""}
        {data?.socials?.instagram ? <Instagram /> : ""}
        {data?.socials?.twitter ? <Twitter /> : ""}
        {data?.socials?.facebook ? <Facebook /> : ""}
      </div>
    </div>
  );
};

export default UserProfile;
