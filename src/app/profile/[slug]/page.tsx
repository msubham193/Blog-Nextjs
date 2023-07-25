/* eslint-disable react/no-unescaped-entities */
import Feed from "@/components/feed/Feed";
import axios from "axios";
import React from "react";

const fetchPosts = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_URL}/api/post/fetchbyauthor?id=${id}`
    );
    return data.posts;
  } catch (error: any) {
    console.log(error.message);
  }
};

const fetchAuthor = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_URL}/api/user/fetch?id=${id}`
    );
    return data.user;
  } catch (error: any) {
    console.log(error.message);
  }
};

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchPosts(params.slug);

  const user = await fetchAuthor(params.slug);

  return (
    <main className=" p-5  w-[65%]">
      <link rel="icon" href="favicon.ico" sizes="any" />
      {data?.length == 0 ? (
        <div className="h-screen w-full flex items-center justify-center">
          {user?.name} don't have any posts
        </div>
      ) : (
        <>
          {" "}
          <h1 className="font-extrabold text-2xl mt-5 mb-5">
            Explore The Time Line of {user?.name} :
          </h1>
          <Feed data={data} />
        </>
      )}
    </main>
  );
};

export default page;
