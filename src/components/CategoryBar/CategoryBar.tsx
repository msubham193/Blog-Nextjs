"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CategoryBar = () => {
  const pathname = usePathname();

  // console.log(pathname.split("/")[2]);
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

  return (
    <div className="flex flex-col gap-5 items-center min-w-full justify-center  mt-5 font-normal  bg-white ">
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
  );
};

export default CategoryBar;
