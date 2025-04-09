import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
