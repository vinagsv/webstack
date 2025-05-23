import mongoose from "mongoose";
import "dotenv/config";

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("mongodb connected😎...");
    })
    .catch(() => console.log("error in connecting to mongodb..."));
};

export default db;
