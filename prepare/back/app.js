const express = require("express");
const postRouter = require("./routes/post.js");
const db = require("./models");
const app = express();

db.sequelize.sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("hello express");

})

app.get("/api", (req, res) => {
  res.send("hello jay");
})

app.get("/posts", (req, res) => {
  res.json([
    { id: 1, content: "hello" },
    { id: 2, content: "hello2" },
    { id: 3, content: "hello3" },
  ])
})

app.use("/post", postRouter); // 에 의해서 /post-prefix가 빠져있다

app.listen(3065, () => {
  console.log("서버 실행 중");
})