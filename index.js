const server = require("./api/server.js");

const port = process.env.PORT || 6969;

server.listen(port, () => {
  console.log(` server listening on port ${port} - stay fresh`);
});
