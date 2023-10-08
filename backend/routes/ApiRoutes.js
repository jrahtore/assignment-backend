const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const User = require("../models/userModel");
const { default: mongoose } = require("mongoose");
dotenv.config();
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.send({});
  }
});
router.get("/user/:id", async (req, res) => {
  try {
    console.log();
    const user = await User.findOne({ _id: req.params.id });
    res.send(user);
  } catch (e) {
    res.send([]);
  }
});
router.delete("/user/:id", async (req, res) => {
  try {
    console.log();
    await User.findOneAndDelete({ _id: req.params.id });
    res.send("pass");
  } catch (e) {
    console.log("error", e);
    res.send("fail");
  }
});
router.put("/user/:id", async (req, res) => {
  try {
    const payload = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      about: req.body.about,
      phone: req.body.phone,
    };
    // Backend validation not added because its not mentioned where to add validation in assignment
    await User.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(req.params.id) },
      payload
    );
    res.send("pass");
  } catch (e) {
    console.log("Error", e);
    res.send("fail");
  }
});
router.post("/user", async (req, res) => {
  try {
    const payload = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      country: req.body.country,
      about: req.body.about,
      phone: req.body.phone,
    };
    // Backend validation not added because its not mentioned where to add validation in assignment
    await User.create(payload);
    res.send("pass");
  } catch (e) {
    console.log("Error", e);
    res.send("fail");
  }
});
module.exports = router;
