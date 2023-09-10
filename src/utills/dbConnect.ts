// import mongoose, { ConnectOptions } from "mongoose";

// export const dbConnection = async () => {
//   mongoose.set("strictQuery", true);
//   try {
//     await mongoose.connect(
//       process.env.DATABASE_URL as string,
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       } as ConnectOptions
//     );
//     console.log("connection established");
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

import mongoose, { ConnectOptions } from "mongoose";

export const dbConnection = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected");
    return;
  }

  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(
      process.env.DATABASE_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("Connection established");
  } catch (error: any) {
    console.error("Error connecting to the database:", error.message);
  }
};
