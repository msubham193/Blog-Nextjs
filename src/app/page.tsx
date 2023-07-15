import Image from "next/image";

import { signIn, useSession } from "next-auth/react";
import Article from "@/components/Articles/Article";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions, getAuthSession } from "./api/auth/[...nextauth]/route";

const fetchPosts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_URL}/api/post/fetch`, {
      method: "GET",
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const { posts } = await fetchPosts();
  console.log(posts);
  const session: any = await getServerSession(authOptions);

  console.log(session?.user?.image);
  // console.log(data.length);

  return (
    <main className=" p-5  w-[65%]">
      <CategoryBar />

      {posts?.map((item: any) => (
        <Article key={item._id} props={item} />
      ))}
    </main>
  );
}
