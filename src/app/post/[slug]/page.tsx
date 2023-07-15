import axios from "axios";
import Image from "next/image";
import React from "react";

const fetchSingelPost = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_URL}/api/post/fetch?id=${id}`
    );
    return data.posts;
  } catch (error) {
    console.log(error);
  }
};

const SinglePost = async ({ params }: { params: { slug: string } }) => {
  console.log(params.slug);
  const data = await fetchSingelPost(params.slug);
  // console.log(data.image);

  return (
    <main className="text-black p-10 shadow-md w-[65%]">
      <h1 className="font-medium text-3xl">{data.title}</h1>
      <p className="text-sm mt-1">{data.createdAt}</p>
      <div className="flex gap-2 items-center  mt-5 cursor-pointer ">
        <Image
          src={data.author.avatar}
          width={35}
          height={35}
          alt="avatar"
          className="rounded-full"
        />
        <div>
          <h1 className="text-sm font-medium">{data.author.name}</h1>
          <p className="text-xs ">{data.author.slug}</p>
        </div>
      </div>
      <img
        src={data.image}
        className=" mt-3 w-[80%] rounded-md mb-5"
        alt="image"
      />

      <p className="w-[90%] text-justify font-normal text-base">
        {data.content}
      </p>
    </main>
  );
};

export default SinglePost;
