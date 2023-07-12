import Image from "next/image";

import { signIn, useSession } from "next-auth/react";
import Article from "@/components/Articles/Article";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions, getAuthSession } from "./api/auth/[...nextauth]/route";

const fetchPosts = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/api/post/fetch");
    return data.posts;
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const data = await fetchPosts();

  const session: any = await getServerSession(authOptions);

  console.log(session?.user?.image);
  // console.log(data.length);

  return (
    <main className=" p-5  w-[65%]">
      <CategoryBar />

      {data?.map((item: any) => (
        <Article key={item._id} props={item} />
      ))}
    </main>
  );
}
