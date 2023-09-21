import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import catchAsync from "../helpers/catchAsync.js";
import { GetUser } from "../models/database.js";
import envHandler from "../helpers/envHandler.js";

export const LoginController = catchAsync(async (req, res) => {
  let { email, password } = req.body;
  email = email.trim();
  password = password.trim();

  const user = await GetUser(email);
  if (!user) {
    return res.status(400).json({ error: "Incorrect credentials" });
  }

  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    return res.status(400).json({ error: "Incorrect credentials" });
  }

  const token = jwt.sign({ userID: user.user_id }, envHandler("JWTSecret"), {
    expiresIn: "30d",
  });
  return res.json({ message: "logged in", token });
});
