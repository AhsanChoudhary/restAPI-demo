require("./db/connection");
const express = require("express");
const { Post } = require("./models/posts");
const { userRouter } = require("./routes/user");
const { postRouter } = require("./routes/posts");

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(userRouter);
app.use(postRouter);
app.get("/health", (req, res) => {
  res.status(200).send({ message: "API is working" });
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});