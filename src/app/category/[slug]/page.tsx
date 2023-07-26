import Article from "@/components/Articles/Article";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import axios from "axios";
import { usePathname } from "next/navigation";
import React from "react";
import notfound from "../../../Animation/json/notfound.json";
import Lottie from "lottie-react";
import Animation from "@/Animation/Animation";

const fetchPostsCategory = async (category: string) => {
  try {
    const { data } = await axios.get(
      `https://blog-nextjs-msubham193.vercel.app/api/post/fetch?category=${category}`
    );
    return data.posts;
  } catch (error) {
    console.log(error);
  }
};
const Category = async ({ params }: { params: { slug: string } }) => {
  const convertedStr =
    params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  const data = await fetchPostsCategory(convertedStr);

  return (
    <main className=" p-5  xl:w-[65%]">
      <CategoryBar />

      {data.length > 0 ? (
        <>
          {" "}
          {data?.map((item: any) => (
            <Article key={item._id} props={item} />
          ))}
        </>
      ) : (
        <Animation
          animationData={notfound}
          classes=" flex items-center justify-center"
        />
      )}

      {/* {params.slug} */}
    </main>
  );
};

export default Category;
