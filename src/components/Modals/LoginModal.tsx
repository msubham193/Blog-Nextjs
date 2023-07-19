"use client";
import React from "react";
import Modal from "./Modal";
import { LoginModalStore } from "../../../store/LoginModalStore";
import Google from "../Articles/Icons/Google";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModal: any = LoginModalStore();

  console.log(loginModal);

  const content = (
    <div className="flex items-center justify-center border w-full rounded-xl border-gray-600">
      <Google />
      <button className=" p-2 w-[70%] " onClick={() => signIn("google")}>
        Continue with Google
      </button>
    </div>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      title="Login"
      handleClose={loginModal.setClose}
      button={""}
      content={content}
    />
  );
};

export default LoginModal;
