const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("../routes/user-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);

server.get("/", async (req, res) => {
  res.status(200).json({ api: "winning" });
});

module.exports = server;
