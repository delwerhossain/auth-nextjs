import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connection successful");
    });
    connection.on("error", (err) => {
      console.log("mongodb connection error " + err.message);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
};
