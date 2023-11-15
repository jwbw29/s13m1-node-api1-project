// BUILD YOUR SERVER HERE
const express = require("express");
const server = express();
server.use(express.json());

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

// [x] create a new user
server.post("/api/users", (req, res) => {
  const user = req.body;
  !user.name || !user.bio
    ? res
        .status(400)
        .json({ message: "Please provide name and bio for the user" })
    : User.insert(user)
        .then((createdUser) => {
          res.status(201).json(createdUser);
        })
        .catch(() => {
          res.status(500).json({
            message: "There was an error while saving the user to the database",
          });
        });
});

// [ ] update a user
// server.put()

// [x] delete a user
server.delete("/api/users/:id", async (req, res) => {
  const possibleUser = await User.findById(req.params.id);

  if (!possibleUser) {
    res.status(404).json({
      message: "The user with the specified ID does not exist",
    });
  } else {
    const deletedUser = await User.remove(possibleUser.id);
    res.status(200).json(deletedUser);
  }
});

server.use("*", (req, res) => {
  res.status(404).json({ message: "not found" });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
