import { dbConnection } from "@/utills/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Post from "../../../../../models/postModel";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  try {
    await dbConnection();
    const session: any = await getServerSession(authOptions);
    console.log(session)

    if (!session) {
      return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    }
    await Post.create({
      title: data.title,
      content: data.content,
      image: data.image,

      category: data.category,
      author: {
        id: session.user.id,
        name: session.user.name,
        avatar: session.user.image,
        slug: "Software Developer",
      },
    });
    return NextResponse.json(
      { message: "Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
};
