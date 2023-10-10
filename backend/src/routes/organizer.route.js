import express from "express";
import {
  getAllOrganizer,
  doneActivity,
} from "../controllers/organizer.controller.js";
const router = express.Router();

router.get("/", getAllOrganizer);

router.put("/:activityid/set-done", doneActivity);

export default router;
