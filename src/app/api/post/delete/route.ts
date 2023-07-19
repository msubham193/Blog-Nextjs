import { dbConnection } from "@/utills/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import Post from "../../../../../models/postModel";
import { authOptions } from "../../auth/[...nextauth]/route";

export const DELETE = async (request: NextRequest) => {
  const id: string = request.nextUrl.searchParams.get("id") || "";

  try {
    await dbConnection();
    const session: any = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    }

    await Post.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Deleted Successfuly" },
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
