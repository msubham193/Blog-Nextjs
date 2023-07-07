import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("connection established");
  } catch (error: any) {
    console.log(error.message);
  }
};
