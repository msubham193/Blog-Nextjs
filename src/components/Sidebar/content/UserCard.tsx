// import { usePathname } from "next/navigation";

import axios from "axios";
import React from "react";
import UserSingle from "./UserSingle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const fetchUser = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_URL}/api/user/fetch`);
    return data.users;
  } catch (error) {}
};

const fetchMe = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_URL}/api/user/me?id=${id}`
    );

    return data;
  } catch (error: any) {
    console.log(error);
  }
};
const UserCard = async () => {
  const session: any = await getServerSession(authOptions);


  let users = await fetchUser();

  users = users.filter((user: any) => user?._id !== session?.user?.id);

  let data: any;
  if (session) {
    data = await fetchMe(session?.user.id);
  }

  return (
    <div className="shadow-md mt-10 max-w-sm bg-slate-100 rounded-lg p-5">
      <h1 className="text-sm font-semibold">Users You Can Follow</h1>

      <div className="w-full mt-5">
        {users?.map((user: any) => (
          <UserSingle key={user.id} props={user} user={data?.user} />
        ))}
      </div>
    </div>
  );
};

export default UserCard;
