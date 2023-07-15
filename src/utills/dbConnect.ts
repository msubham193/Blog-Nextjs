import mongoose, { ConnectOptions } from "mongoose";

export const dbConnection = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(
      process.env.DATABASE_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("connection established");
  } catch (error: any) {
    console.log(error.message);
  }
};
