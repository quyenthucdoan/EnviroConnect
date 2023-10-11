import express from "express";

import {
  createUser,
  getUser,
  findBuddy,
  listBuddy,
  registerActivity,
  markDoneActivity,
  addBuddy
} from "../controllers/user.controller.js";
const router = express.Router();

/* Create user*/
router.post("/create-user", createUser);

/* Get User */
router.get("/:id", getUser);

/* Find friends near you */
router.get("/:id/near-buddies", findBuddy);

/* Return all your friends*/
router.put("/:userid/buddy", addBuddy);
router.get("/:userid/friends", listBuddy);

/* Register activity  for user*/
router.put("/:userid/added-activity", registerActivity);

/* Completed an activity*/
router.put("/:userid/done-activity", markDoneActivity);


export default router;
