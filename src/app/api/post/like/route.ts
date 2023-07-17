import { dbConnection } from "@/utills/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Post from "../../../../../models/postModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export const PUT = async (request: NextRequest) => {
  const id: string = request.nextUrl.searchParams.get("id") || "";

  try {
    await dbConnection();
    const session: any = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    }
    const post = await Post.findById(id);

    if (!post.likes.includes(session.user.id)) {
      await post.updateOne({ $push: { likes: session.user.id } });

      const updatedPost = await Post.findById(id);

      return NextResponse.json(
        {
          message: "Post Liked !",
          post: updatedPost,
        },
        { status: 200 }
      );
    } else {
      await post.updateOne({ $pull: { likes: session.user.id } });

      const updatedPost = await Post.findById(id);
      return NextResponse.json(
        {
          message: "Post DisLiked !",
          post: updatedPost,
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
};
