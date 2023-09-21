import validator from "validator";
import jwt from "jsonwebtoken";

import catchAsync from "../helpers/catchAsync.js";
import {
  AddItem,
  DeleteItem,
  GetItems,
  GetItemsByUser,
  GetUserByID,
} from "../models/database.js";

export const UploadController = catchAsync(async (req, res) => {
  const userID = jwt.decode(req.headers.authorization.split(" ")[1]).userID;
  const user = await GetUserByID(userID);

  let { name, location, contact, email, room, block } = req.body;

  name = name.trim();
  location = location.trim();
  contact = contact.trim();
  email = email.trim();
  room = room.trim();
  block = block.trim();
  const imgPath = req.file.filename;

  if (!validator.isMobilePhone(contact, ["en-IN"]))
    return res.status(400).json({ error: "Invalid contact number" });

  if (!validator.isEmail(email))
    return res.status(400).json({ error: "Invalid email" });

  if (email != user.email) 
    return res.status(400).json({error: "Email mismatch"});

  await AddItem({ name, location, contact, email, room, block, imgPath });
  res.json({ message: "success" });
});

export const GetController = catchAsync(async (req, res) => {
  const items = await GetItems();
  res.json({ message: "success", items });
});

export const GetSelectController = catchAsync(async (req, res) => {
  const items = await GetItemsByUser(req.params.email);
  res.json({ message: "success", items });
});

export const DeleteController = catchAsync(async (req, res) => {
  let item_id = req.params.item_id;

  item_id = item_id.trim();
  console.log(item_id);

  await DeleteItem(item_id);

  res.json({ message: "success" });
});
