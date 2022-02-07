const express = require("express");

const router = express();

router.post("/", (req, res) => {  // POST /post
  res.json({ id: 1, content: "hello" });
})

router.delete("/", (req, res) => { // delete /post
  res.json("작성 삭제 완료");

})

module.exports = router;
