"use client";
import Logo from "@/Icons/Logo";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Menu from "@/Icons/Menu";
import WriteButton from "./WriteButton";

import Link from "next/link";
import Logout from "../Articles/Icons/Logout";
import Profile from "../Articles/Icons/Profile";
import About from "../Articles/Icons/About";
import Developer from "../Articles/Icons/Developer";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(!open);
  };

  const onLogin = () => {
    signIn("google");
  };

  return (
    <div className="flex items-center justify-between min-w-full h-16 shadow-lg p-10  fixed top-0 bg-white z-50">
      <SearchBar />
      <Link className="flex items-center gap-2" href="/">
        {" "}
        <Logo />
        <span className="font-bold  text-xl">Story</span>
      </Link>

      <div className="flex gap-3">
        {!data?.user ? (
          <>
            <button
              className="bg-black rounded-2xl text-white p-2 px-3"
              onClick={onLogin}
            >
              Login
            </button>
            <button className="border border-black rounded-full p-2 px-3 text-black w-28">
              Signup
            </button>
          </>
        ) : (
          <div className="flex items-center justify-between gap-5 h-full relative">
            <WriteButton />
            <div className="flex justify-center gap-2  " onClick={openDropDown}>
              <Image
                src={data.user.image as string}
                alt="user"
                width={35}
                height={35}
                className="rounded-full"
              />
              <Menu />
            </div>
            {open ? <DropDown /> : ""}
          </div>
        )}
      </div>
    </div>
  );
};

const DropDown = () => {
  const { data }: any = useSession();
  const router = useRouter();
  const items = [
    {
      id: 1,
      text: "Profile",
      icon: <Profile />,
      path: `/profile/${data?.user?.id}`,
    },
    {
      id: 2,
      text: "About",
      icon: <About />,
      path: "/about",
    },
    {
      id: 3,
      text: "Log out",
      icon: <Logout />,
    },
    {
      id: 4,
      text: "Developer Info",
      icon: <Developer />,
      path: "/developer",
    },
  ];

  return (
    <div className="bg-white w-56 h-64 p-5 absolute right-0 top-14 shadow-xl border  rounded-md">
      {items.map((d: any) => (
        <div
          className="cursor-pointer flex items-center gap-5 font-medium text-base mb-5 hover:bg-slate-300 rounded-md p-2"
          key={d.id}
          onClick={() =>
            d.text === "Log out" ? signOut() : router.push(d.path)
          }
        >
          {d.icon}
          <button> {d.text}</button>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
