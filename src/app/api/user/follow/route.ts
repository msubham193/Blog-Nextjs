import { dbConnection } from "@/utills/dbConnect";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import User from "../../../../../models/userModels";

export const PUT = async (request: NextRequest) => {
  const id: string = request.nextUrl.searchParams.get("id") || "";

  try {
    const session: any = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    }

    const user = await User.findById(id);

    const me = await User.findById(session.user.id);
    if (!user.followers.includes(session.user.id)) {
      await user.updateOne({ $push: { followers: session.user.id } });
      await me.updateOne({ $push: { following: id } });
      return NextResponse.json(
        {
          message: "Following",
        },
        { status: 200 }
      );
    } else {
      await user.updateOne({ $pull: { followers: session.user.id } });
      await me.updateOne({ $pull: { following: id } });
      return NextResponse.json(
        {
          message: "Unfollowing",
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
