import express from "express";

import {
  createUser,
  getUser,
  findBuddy,
  listBuddy,
  registerActivity,
  markDoneActivity,
  addBuddy,
} from "../controllers/user.controller.js";
import multer from "multer";
const router = express.Router();
// const upload = multer({
//   storage: Storage,
// });

// router.post("/upload", upload, function (req, res, next) {
//   const success = req.file.filename + "uploaded successfully";
//   res.render("upload-file");
// });

/* Create user*/
router.post("/create-user", createUser);

/* Get User */
router.get("/:id", getUser);

/* Find friends near you */
router.get("/:id/near-buddies", findBuddy);

/* Add 1 friend*/
router.put("/:userid/buddy", addBuddy);

/* Return all your friends*/
router.get("/:userid/friends", listBuddy);

/* Register activity  for user*/
router.put("/:userid/added-activity", registerActivity);

/* Completed an activity*/
router.put("/:userid/done-activity", markDoneActivity);

export default router;
