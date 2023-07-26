import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { dbConnection } from "@/utills/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Post from "../../../../../models/postModel";
import User from "../../../../../models/userModels";

export const PUT = async (request: NextRequest) => {
  const data = await request.json();
  const id: string = request.nextUrl.searchParams.get("id") || "";
  console.log(data.link.github);
  try {
    await dbConnection();
    const session: any = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "UnAuthorized" }, { status: 404 });
    }
    await User.findOneAndUpdate(
      {
        _id: id,
      },
      {
        about: data.aboutText,
        // socials: {

        //   github: data?.link?.github,
        //   instagram: data?.link?.instagram,
        //   twitter: data?.link?.twitter,
        //   facebook: data?.link?.facebook,
        // },
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
