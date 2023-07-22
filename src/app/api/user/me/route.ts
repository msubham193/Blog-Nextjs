import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import User from "../../../../../models/userModels";
import { dbConnection } from "@/utills/dbConnect";

export const GET = async (request: NextRequest) => {
  const id: string = request.nextUrl.searchParams.get("id") || "";

  try {
    await dbConnection();
    const session: any = await getServerSession(authOptions);

    console.log(id);
    // if (!session) {
    //   return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    // }

    const user = await User.findById(id);

    console.log();

    return NextResponse.json(
      {
        user: user,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
};
