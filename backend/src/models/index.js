import mongoose from "mongoose";
import connectString from "../configs/db.config.js";

const connectDB = async () => {
  const conn = await mongoose.connect(connectString);
  console.log(`Mongo db connected: ${conn.connection.host}`);
};

export default connectDB;
