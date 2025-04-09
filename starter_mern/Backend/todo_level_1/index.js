import express from "express";
import "dotenv/config";
import cors from "cors";
import db from "./utils/db.js";
import router from "./routes/task.routes.js";

const app = express(); // we are giving express power to app

const port = process.env.PORT || 8001;

app.use(cors());
// app.listen(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true })); // making encoding accessible
app.use(express.json()); // accept the data from frontend as an json format

db(); // connect to the database
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server is connected on port ${port}...`);
});
