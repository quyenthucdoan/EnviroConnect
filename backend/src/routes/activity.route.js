import express from "express";
const router = express.Router();
import {
  getAnActivity,
  getAllActivity,
  listNearbyActivity,
  createActivity,
} from "../controllers/activity.controller.js";

router.post("/activities/create-activity", createActivity);

/* Get 1 activity*/
router.get("/activities/:id", getAnActivity);

/* Get all activity*/
router.get("/activities/", getAllActivity);

/* Find nearby activity Buddy */
router.get("/activities/:userid/user", listNearbyActivity);

export default router;
