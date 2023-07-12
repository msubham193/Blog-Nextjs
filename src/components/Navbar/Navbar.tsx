"use client";
import Logo from "@/Icons/Logo";
import React, { useState } from "react";
import SearchBar from "../Search/SearchBar";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Menu from "@/Icons/Menu";
import WriteButton from "./WriteButton";
import Write from "@/Icons/Write";

const Navbar = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);

  const openDropDown = () => {
    setOpen(!open);
  };

  console.log(data);
  return (
    <div className="flex items-center justify-between min-w-full h-16 shadow-lg p-10  fixed top-0 bg-white z-50">
      <SearchBar />
      <div className="flex items-center gap-2">
        {" "}
        <Logo />
        <span className="font-bold  text-xl">Story</span>
      </div>

      <div className="flex gap-3">
        {!data?.user ? (
          <>
            <button
              className="bg-black rounded-2xl text-white p-2 px-3"
              onClick={() => signIn("google")}
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
  return (
    <div className="bg-white w-56 h-64 p-5 absolute right-0 top-14 shadow-xl border border-teal-200 rounded-md">
      <div>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
