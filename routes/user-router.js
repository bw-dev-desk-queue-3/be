const router = require("express").Router();

const Users = require("../models/users-model.js");

const { adminAuth } = require("../auth/withAuth.js");

router.get("/", adminAuth, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

router.get("/:id", adminAuth, async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     let newUser = req.body;

//     const saved = await Users.add(newUser);
//     res.status(201).json(saved);
//   } catch (error) {
//     res.status(500).json({ errorMessage: error.message });
//   }
// });

module.exports = router;
