const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT, HOST, MONGO_URL } = require("./config");

// db это URL о которому будет хранится БД
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, async () => {
      console.log(`2222 Auth server started at port: ${PORT}`);
      console.log(`22222 Server on host: ${HOST}`);
      console.log(`2222 Auth DB started at URL : ${MONGO_URL}`);

      // const silence = new Post({ name: "Silence" });

      // await silence.save();

      // const posts = await Post.find();
      // console.log("111111111111 posts", posts);
    });
  })
  .catch((err) => {
    console.log("1111111111111 connection DB error", err);
  });

app.get("/test", (req, res) => {
  res.send("Auth route work correctly");
});
