import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI || "");
  } catch (error) {
    console.log("bd接続失敗");
    throw new Error();
  }
};
