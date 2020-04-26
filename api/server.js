const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).json({ api: "winning" });
});

module.exports = server;
