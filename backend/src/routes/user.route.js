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
router.post("/users/create-user", createUser);

/* Get User */
router.get("/users/:id", getUser);

/* Find friends near you */
router.get("/users/:id/near-buddies", findBuddy);

/* Return all your friends*/
// router.get("/users/:id/friends", listFriends);

/* Register activity  for user*/
router.put("/users/:id/added-activity", registerActivity);

/* Completed an activity*/
router.put("/users/:id/done-activity", markDoneActivity);

export default router;
