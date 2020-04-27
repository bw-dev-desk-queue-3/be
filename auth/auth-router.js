const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/users-model.js");
const jwtKey = process.env.JWT_SECRET || "secret";

router.post("/register", async (req, res) => {
  try {
    let userInfo = req.body;

    const rounds = process.env.HASH_ROUNDS || 14;

    const hash = bcrypt.hashSync(userInfo.password, rounds);

    userInfo.password = hash;

    const newUser = await Users.add(userInfo);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(([user]) => {
      console.log("user", user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: "login successful", token, user });
      } else {
        res.status(401).json({ message: "incorrect username or password" });
      }
    })
    .catch((error) => {
      res.status(500).json({ errorMessage: error.message });
    });
});

generateToken = (user) => {
  const payload = {
    username: user.username,
    isAdmin: user.is_admin,
    user_id: user._id,
  };

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, jwtKey, options);
};

module.exports = router;
