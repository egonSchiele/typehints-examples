import express from "express";
import { message } from "./foo.js";
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
