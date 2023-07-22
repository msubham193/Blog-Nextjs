import NextAuth from "next-auth/next";

import { dbConnection } from "@/utills/dbConnect";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../../models/userModels";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    session: async ({ session, token }: any) => {
      // console.log(token);
      // console.log(session);
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

      const sessionUser = await User.findOne({ email: token.email });
      // console.log(sessionUser);
      // console.log(token);
      if (token) {
        session.user.id = sessionUser.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }

      // console.log(session.user);

      return session;
    },

    signIn: async ({ profile, session }: any) => {
      console.log(profile.picture);
      try {
        await dbConnection();
        if (await User.findOne({ email: profile.email })) {
          return true;
        }
        await User.create({
          email: profile.email,
          name: profile.name,
          image: profile.picture,
        });

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
const handler = NextAuth(authOptions);
export const getAuthSession = () => getServerSession(authOptions);
export { handler as GET, handler as POST };
