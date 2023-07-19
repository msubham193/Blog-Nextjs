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
    await Post.findOneAndUpdate(
      {
        _id: id,
      },
      {
        title: data.title,
        content: data.content,
        image: data.image,
        category: data.category,
      }
    );

    return NextResponse.json(
      {
        message: "Updated Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 500 }
    );
  }
};
