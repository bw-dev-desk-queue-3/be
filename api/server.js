const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("../routes/user-router.js");
const authRouter = require("../auth/auth-router.js");
const ticketRouter = require("../routes/ticket-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter);
server.use("/api", authRouter);
server.use("/api/tickets", ticketRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "winning" });
});

module.exports = server;
