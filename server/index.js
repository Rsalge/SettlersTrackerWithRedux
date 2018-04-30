const express = require("express");
const path = require("path");
const http = require("http");
const api = require("./api");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../env.env" });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/api", api);

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected!");
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (!process.env.DEV) {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Server listening on ${port}`);
