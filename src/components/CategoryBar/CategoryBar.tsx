"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import DropDown from "../DropDown/DropDown";

const CategoryBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  let convertedStr = "";
  if (pathname != "/") {
    convertedStr =
      pathname.split("/")[2].charAt(0).toUpperCase() +
      pathname.split("/")[2].slice(1);
  }

  const data = [
    {
      id: 0,
      label: "Home",
      path: "/",
    },
    {
      id: 1,
      label: "Sports",
      path: "/category/sports",
    },
    {
      id: 2,
      label: "Entertainment",
      path: "/category/entertainment",
    },
    {
      id: 3,
      label: "Science",
      path: "/category/science",
    },
    {
      id: 4,
      label: "Technology",
      path: "/category/technology",
    },
    {
      id: 5,
      label: "Space",
      path: "/category/space",
    },
  ];

  const people = [
    { name: "Home", path: "/" },
    { name: "Sports", path: "/category/sports" },
    { name: "Entertainment", path: "/category/science" },
    { name: "Science", path: "/category/technology" },
    { name: "Space", path: "/category/space" },
  ];
  const [selected, setSelected] = useState(people[0]);
  return (
    <>
      <div className=" hidden xl:flex flex-col gap-5 items-center xl:min-w-full  bg-white justify-center  mt-5 font-normal   ">
        <div className="flex gap-5 items-center justify-center">
          {data.map((item) => (
            <Link
              href={item.path}
              key={item.id}
              className={`${
                item.label === "Home"
                  ? "font-extrabold"
                  : item.label === convertedStr
                  ? "font-extrabold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="h-[1px] bg-black min-w-[100%] "> </div>
      </div>

      <div className="flex justify-between">
        <select
          name=""
          id=""
          className="p-2 rounded-lg shadow-lg bg-teal-50 text-xs"
        >
          {data.map((item) => (
            <option key={item.id} onClick={() => router.push(item.path)}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CategoryBar;
