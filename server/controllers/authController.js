import db from "../config/dbConnection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export const register = async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !email || !phone || !password) {
    return res.status(400).json({ error: "Всі поля обов'язкові" });
  }

  try {
    const [existingUsers] = await db.execute(
      "SELECT id FROM users WHERE email = ? OR phone = ?",
      [email, phone]
    );

    if (existingUsers.length > 0) {
      return res
        .status(409)
        .json({ error: "Користувач з таким email або телефоном вже існує" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute(
      "INSERT INTO users (username, email, phone, password, role) VALUES (?, ?, ?, ?, ?)",
      [username, email, phone, hashedPassword, "user"]
    );

    res.status(201).json({ message: "Користувача зареєстровано" });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Помилка реєстрації" });
  }
};

export const login = async (req, res) => {
  const { emailOrPhone, password } = req.body;

  try {
    const [rows] = await db.execute(
      "SELECT * FROM users WHERE email = ? OR phone = ?",
      [emailOrPhone, emailOrPhone]
    );

    const user = rows[0];
    if (!user)
      return res.status(404).json({ error: "Користувача не знайдено" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Невірний пароль" });

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Помилка входу" });
  }
};

export const getProfile = (req, res) => {
  res.json({ message: `Привіт, ${req.user.username}`, user: req.user });
};
