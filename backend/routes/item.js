import express from "express";
import multer from "multer";

import {
  UploadController,
  GetController,
  GetSelectController,
  DeleteController,
} from "../controllers/itemcontroller.js";
import { protect } from "../middleware/protect.js";

const item = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

item.post("/upload", protect, upload.single('image'), UploadController);
item.post("/get", protect, GetController);
item.post("/get/:email", protect, GetSelectController);
item.post("/delete/:item_id", protect, DeleteController);
export default item;
