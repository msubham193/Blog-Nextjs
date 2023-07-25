"use client";
import axios from "axios";
import React from "react";
import UserSingle from "./UserSingle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Animation from "@/Animation/Animation";
import loading from "../../../Animation/json/loading.json";
import UserSingleSkeleton from "@/components/Skeleton/UserSingleSkeleton";

const UserCard = () => {
  let { data, isLoading, isSuccess } = useQuery({
    queryFn: async () => {
      const { data } = await axios.get(`/api/user/fetch`);

      return data.users;
    },
  });

  const session: any = useSession();

  let query: any;
  if (session) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    query = useQuery({
      queryFn: async () => {
        const { data } = await axios.get(
          `/api/user/me?id=${session?.data?.user?.id}`
        );
        console.log(data);
        return data;
      },
    });
  }

  data = Array.isArray(data)
    ? data?.filter((user: any) => user?._id !== session?.data?.user?.id)
    : [];

  return (
    <div className="shadow-md mt-10 max-w-sm bg-slate-100 rounded-lg p-5">
      <h1 className="text-sm font-semibold">Users You Can Follow</h1>

      <div className="w-full mt-5 transition-all duration-300">
        {isLoading ? (
          <div className="">
            <UserSingleSkeleton />
            <UserSingleSkeleton />
            <UserSingleSkeleton />
          </div>
        ) : (
          data?.map((user: any) => (
            <UserSingle key={user.id} props={user} user={query?.data[0]} />
          ))
        )}
      </div>
    </div>
  );
};

export default UserCard;
