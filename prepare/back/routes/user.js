const express = require("express");
const { User } = require("../models");

const router = express.Router();

router.post("/", async (req, res) => {
  await User.creat({
    email: req.body.email,
    password: req.body.password,
  });

  res.send("ok");
  // res.json("ok");
});

module.exports = router;