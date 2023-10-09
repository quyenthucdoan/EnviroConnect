import express from "express";
const router = express.Router();
import {
  getAnActivity,
  getAllActivity,
  listNearbyActivity,
  createActivity,
} from "../controllers/activity.controller.js";

router.post("/create-activity", createActivity);

/* Get 1 activity*/
router.get("/:id", getAnActivity);

/* Get all activity*/
router.get("/", getAllActivity);

/* Find nearby activity Buddy */
router.get("/:id/user", listNearbyActivity);

export default router;
