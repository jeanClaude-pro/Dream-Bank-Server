const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach the user data to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
