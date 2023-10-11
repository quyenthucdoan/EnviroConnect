import express from "express";
import {
  getAllOrganizer,
  doneActivity,
  getAnOrganizer,
} from "../controllers/organizer.controller.js";
const router = express.Router();

router.get("/", getAllOrganizer);

router.get("/:organizerId", getAnOrganizer);

router.put("/:activityid/set-done", doneActivity);

export default router;
