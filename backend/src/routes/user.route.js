import express from "express";
const router = express.Router();
import {
  createUser,
  getUser,
  findBuddy,
  registerActivity,
  markDoneActivity,
} from "../controllers/user.controller.js";

/* Create user*/
router.post("/create-user", createUser);

/* Get User */
router.get("/:id", getUser);

/* Find friends near you */
router.get("/:id/near-buddies", findBuddy);

/* Return all your friends*/
// router.get("/users/:id/friends", listFriends);

/* Register activity  for user*/
router.put("/:userid/added-activity", registerActivity);

/* Completed an activity*/
router.put("/:userid/done-activity", markDoneActivity);

export default router;
