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
import React, { useEffect } from "react";
import { AboutModalStore } from "../../../../store/AboutModalStore";
import { SocialModalStore } from "../../../../store/SocialModalStore";
import { useSession } from "next-auth/react";
import { ProfileStore } from "../../../../store/ProfileStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Plus from "@/Icons/Plus";

const UserProfile = () => {
  const pathname = usePathname();
  const session: any = useSession();
  const router = useRouter();
  const profile: any = ProfileStore();

  useEffect(() => {
    if (profile.isSuccess) {
      window.location.reload();
    }
  }, [profile.isSuccess, router]);

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/user/fetch?id=${pathname.split("/")[2]}`
      );

      return data.user;
    },
  });

  console.log(data?.socials);
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
      <h1 className="text-center mt-8 font-bold">{data?.name}</h1>
      <div className="p-2 text-center text-xs text-slate-500">
        {!data?.about?.length ? (
          session?.data?.user.id === pathname.split("/")[2] ? (
            <div
              className="flex gap-1 cursor-pointer items-center justify-center text-sm font-bold text-gray-500"
              onClick={onAboutEdit}
            >
              Add About
            </div>
          ) : (
            "No Description"
          )
        ) : (
          <div
            className="cursor-pointer font-medium tracking-wider text-gray-600 text-center px-3  max-w-sm"
            onClick={onAboutEdit}
          >
            {data?.about}
          </div>
        )}
      </div>
      <div className=" p-5 flex text-sm w-full gap-10 items-center justify-center  mb-10 font-bold  ">
        <h1>{data?.followers?.length} Follower</h1>
        <h1>{data?.following?.length} Following</h1>
      </div>
      {/* <div className="px-5 py-2 flex gap-3 items-center justify-center">
        {" "}
        {session?.data?.user?.id == pathname.split("/")[2] ? (
          data?.socials?.github ? (
            <div className="flex w-full justify-center gap-2 ">
              {" "}
              <div onClick={onSocialIconEdit} className="cursor-pointer">
                <Plus />
              </div>
              <div className="flex flex-wrap gap-5">
                {data?.socials?.github ? (
                  <Link href={data.socials?.github}>
                    <Github />
                  </Link>
                ) : (
                  ""
                )}

                {data?.socials?.instagram ? (
                  <Link href={data.socials?.instagram}>
                    <Instagram />
                  </Link>
                ) : (
                  ""
                )}

                {data?.socials?.twitter ? (
                  <Link href={data.socials?.twitter}>
                    <Twitter />
                  </Link>
                ) : (
                  ""
                )}
                {data.socials?.facebook ? (
                  <Link href={data.socials?.facebook}>
                    <Facebook />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )
        ) : (
          "No Social Links"
        )}
      </div> */}
    </div>
  );
};

export default UserProfile;
