import db from "../config/dbConnection.js";

export const getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT id, name, email, phone, role FROM users"
    );
    res.json(rows);
  } catch (err) {
    console.error("Admin fetch error:", err);
    res.status(500).json({ error: "Не вдалося отримати список користувачів" });
  }
};
