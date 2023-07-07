"use client";
import Logo from "@/Icons/Logo";
import React from "react";
import SearchBar from "../Search/SearchBar";
import { signIn } from "next-auth/react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between min-w-full h-16 shadow-lg p-10">
      <SearchBar />
      <div className="flex items-center gap-2">
        {" "}
        <Logo />
        <span className="font-bold  text-xl">Story</span>
      </div>

      <div className="flex gap-3">
        <button
          className="bg-black rounded-2xl text-white p-2 px-3"
          onClick={() => signIn("google")}
        >
          Login
        </button>
        <button className="border border-black rounded-full p-2 px-3 text-black w-28">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Navbar;
