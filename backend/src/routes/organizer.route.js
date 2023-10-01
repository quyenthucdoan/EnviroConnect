import express from "express";
import { getAllOrganizer } from "../controllers/organizer.controller.js";
const router = express.Router();

router.get("/organizers", getAllOrganizer);

export default router;
