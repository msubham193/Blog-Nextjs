import { dbConnection } from "@/utills/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Post from "../../../../../models/postModel";

export const GET = async (request: NextRequest) => {
  // const category = await request.json();
  const category: string = request.nextUrl.searchParams.get("category") || "";
  const id: string = request.nextUrl.searchParams.get("id") || "";
  await dbConnection();

  let posts: any = [];

  try {
    if (category?.length > 0) {
      posts = await Post.find({ category: category });
    } else if (id.length > 0) {
      posts = await Post.findById({ _id: id });
    } else {
      posts = await Post.find();
    }
    return NextResponse.json({ posts: posts }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
