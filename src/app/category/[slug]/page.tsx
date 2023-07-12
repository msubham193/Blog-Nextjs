import Article from "@/components/Articles/Article";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import axios from "axios";
import { usePathname } from "next/navigation";
import React from "react";

const fetchPostsCategory = async (category: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/post/fetch?category=${category}`
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
    <main className=" p-5  w-[65%]">
      <CategoryBar />

      {data?.map((item: any) => (
        <Article key={item._id} props={item} />
      ))}
      {/* {params.slug} */}
    </main>
  );
};

export default Category;
