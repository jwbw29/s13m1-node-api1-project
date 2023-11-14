// BUILD YOUR SERVER HERE
const express = require("express");
const server = express();

const users = require("./users/model");
console.log("HERE'S THE DATA for USERS: ", users);

server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
