"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const CategoryBar = () => {
  const pathname = usePathname();

  console.log(pathname);

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
    <div className="flex flex-col gap-5 items-center min-w-full justify-center  mt-5 font-medium">
      <div className="flex gap-5 items-center justify-center">
        {data.map((item) => (
          <Link href={item.path} key={item.id} className="">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="h-[1px] bg-black min-w-[80%] after:bg-gray-800"></div>
    </div>
  );
};

export default CategoryBar;
