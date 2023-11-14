const server = require("./api/server");

const port = 8000;

// START YOUR SERVER HERE
// server.get("/", (res, req) => {
//   // landing page
//   res.json({
//     message:
//       "Welcome to the landing page of this server.\nTo see more you'll need to append '/users' or '/users{id}' to the end of the URL.",
//   });
// });

// [ ] get ALL users
// server.get()

// [ ] get user by ID
// server.get()

// [ ] create a new user
// server.post()

// [ ] update a user
// server.put()

// [ ] delete a user
// server.delete()

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})