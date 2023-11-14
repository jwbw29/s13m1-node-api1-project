// BUILD YOUR SERVER HERE
const express = require("express");
const server = express();

const User = require("./users/model");

// landing page
server.get("/", (req, res) => {
  // landing page
  res.send(
    "Welcome to the landing page of this server. To see more you'll need to append '/users' or '/users{id}' to the end of the URL."
  );
});

// [x] get ALL users
server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: `500: Users could not be retrieved`,
        stack: err.stack,
      });
    });
});

// [x] get user by ID
server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      !user
        ? res
            .status(404)
            .json({ message: "The user with the specified ID does not exist" })
        : res.json(user);
    })
    .catch((err) => {
      res.status(500).json({
        message: `500: Users could not be retrieved`,
        stack: err.stack,
      });
    });
});

// [ ] create a new user
// server.post()

// [ ] update a user
// server.put()

// [ ] delete a user
// server.delete()

server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
