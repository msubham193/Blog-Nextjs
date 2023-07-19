import Article from "@/components/Articles/Article";
import CategoryBar from "@/components/CategoryBar/CategoryBar";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions, getAuthSession } from "./api/auth/[...nextauth]/route";

const fetchPosts = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_URL}/api/post/fetch`);

    return data.posts;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const data = await fetchPosts();

  const session: any = await getServerSession(authOptions);

  // console.log(session.user.image);

  return (
    <main className=" p-5  w-[65%]">
      <link rel="icon" href="favicon.ico" sizes="any" />
      <CategoryBar />

      {data?.map((item: any) => (
        <Article key={item._id} props={...item} />
      ))}
    </main>
  );
}
