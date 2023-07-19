import Write from "@/Icons/Write";
import Link from "next/link";
import React from "react";

const WriteButton = () => {
  return (
    <Link
      href="/uploadbutton/create"
      className="border border-black rounded-lg p-2  text-xs flex items-center text-black gap-1 "
    >
      Write
      <Write />
    </Link>
  );
};

export default WriteButton;
