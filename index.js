const server = require("./api/server");

const port = 8000;

// START YOUR SERVER HERE

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})