const express = require("express");
const ApiRoutes = require("./routes/ApiRoutes");
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

class ServerMain {
  PORT = process.env.PORT || 5000;
  constructor() {
    const app = new express();
    const dbUrl = "mongodb://0.0.0.0:27017/assignment";
    mongoose.Promise = Promise;
    var mongooseOptions = { useNewUrlParser: true };

    const con = mongoose
      .connect(dbUrl, mongooseOptions)
      .then((res) => console.log("Database Connected"))
      .catch((err) => console.log("Database Failed"));
    app.listen(this.PORT, console.log("server started at port :" + this.PORT));
    app.use(bodyParser.json()); // to support JSON-encoded bodies
    app.use(
      bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
      })
    );
    app.use(cors());
    app.use("/api", ApiRoutes);
  }
}
const obj = new ServerMain();
