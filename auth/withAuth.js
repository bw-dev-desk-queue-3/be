const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_SECRET || "secret";

auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(400).json({ message: "no token provided" });
  }
};

adminAuth = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, jwtKey, (err, decoded) => {
    if (err) {
      return res.status(401).json(err);
    } else if (decoded.isAdmin === 1 || true) {
      next();
    } else {
      res.status(401).json({ message: "unauthorized access" });
    }
  });
};

module.exports = {
  auth,
  adminAuth,
};
