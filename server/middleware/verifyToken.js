import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Немає токена" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: "Невалідний токен" });
  }
};

export default verifyToken;
