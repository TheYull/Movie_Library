import dotenv from "dotenv";
dotenv.config();

import { createUser } from "../utils/createUser.js";

(async () => {
  try {
    const id = await createUser({
      username: "Admin",
      email: "admin@example.com",
      phone: "380000000000",
      password: "admin1234",
      role: "admin",
    });

    console.log(`✅ Адміністратора створено з ID ${id}`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Помилка створення адміністратора:", err);
    process.exit(1);
  }
})();
