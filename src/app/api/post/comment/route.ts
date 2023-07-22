import { dbConnection } from "@/utills/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import Post from "../../../../../models/postModel";

export const PUT = async (request: NextRequest) => {
  const data = await request.json();

  const id: string = request.nextUrl.searchParams.get("id") || "";

  try {
    await dbConnection();
    const session: any = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    }

    const post = await Post.findById(id);
    const isReviewed = post.comments.find(
      (rev: any) => rev.user.toString() === session.user.id.toString()
    );

    if (isReviewed) {
      post.comments.forEach((rev: any) => {
        if (rev.user.toString() === session.user.id.toString()) {
          rev.comment = data.cmnt;
        }
      });
    } else {
      post.comments.push({
        user: session?.user?.id,
        name: session?.user?.name,
        avatar: session?.user?.image,
        comment: data.cmnt,
      });
    }

    await post.save({ validateBeforeSave: false });

    return NextResponse.json(
      { post: "commented successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
