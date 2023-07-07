import { dbConnection } from "@/utills/dbConnect";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../../models/userModels";
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    session: async ({ session, token }: any) => {
      session.user = {
        id: "",
        name: "",
        email: "",
        image: "",
        username: "",
      } as {
        id: "";
        name: string;
        email: string;
        image: string;
        username: string;
      };

      session.user = session.user ?? {};
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }
      // console.log(session.user);
      return session;
    },
    signIn: async ({ profile }: any) => {
      console.log(profile);
      try {
        await dbConnection();
        if (await User.findOne({ email: profile.email })) {
          return true;
        }
        await User.create({
          email: profile.email,
          name: profile.name,
        });
        console.log("done");
        return true;
      } catch (error) {
        return false;
      }
    },
  },

  pages: {
    signIn: "/signin",
  },
};
