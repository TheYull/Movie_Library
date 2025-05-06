import db from "../config/dbConnection.js";
import bcrypt from "bcryptjs";

export const createUser = async ({
  username,
  email,
  phone,
  password,
  role = "user",
}) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const [result] = await db.execute(
    "INSERT INTO users (username, email, phone, password, role) VALUES (?, ?, ?, ?, ?)",
    [username, email, phone, hashedPassword, role]
  );

  return result.insertId;
};
