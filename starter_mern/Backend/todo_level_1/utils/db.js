import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDB connected..");
    })
    .catch((err) => {
      console.error("Error while connecting to MongoDB:", err);
    });
};

export default db;
