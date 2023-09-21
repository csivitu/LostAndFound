import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import envHandler from "../helpers/envHandler.js";
import { AddUser, ConnectToDb, GetUser } from "../models/database.js";
import catchAsync from "../helpers/catchAsync.js";

export const RegisterController = catchAsync(async (req, res) => {
  console.log(req);
  let { email, password, fName, lName } = req.body;
  email = email.trim();
  password = password.trim();
  fName = fName.trim();
  lName = lName.trim();

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Please enter a valid email" });
  }

  // Check password
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minNumbers: 1,
      minLowercase: 0,
      minUppercase: 0,
      minSymbols: 0,
      returnScore: false,
    })
  ) {
    return res.status(400).json({
      error:
        "Password must be atleast 8 characters long and contain atleast one number",
    });
  }

  // Check fName and lName
  if (!validator.isAlpha(fName) || !validator.isAlpha(lName)) {
    return res.status(400).json({ error: "Name must contain only alphabets" });
  }

  const existingUser = await GetUser(email);
  if (existingUser)
    return res
      .status(400)
      .json({ error: "An account with this email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await AddUser({ email, password: hashedPassword, fName, lName });
  const user = await GetUser(email);

  const token = jwt.sign({ userID: user.user_id }, envHandler("JWTSecret"), {
    expiresIn: "30d",
  });
  res.json({ message: "success", token });
});
