const express = require("express");
const { UserModel } = require("../models/UserModel");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("The user route is working fine !!");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) return res.send({ message: "OOPS !! SOMETHING WENT WRONG", status: 0 });
    try {
      let user = new UserModel({ name, email, password: hash });
      await user.save({ wtimeout: 15000 });
      res.send({
        message: "USER CREATED SUCCESSFULLY !! ",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

module.exports = { userRouter };
