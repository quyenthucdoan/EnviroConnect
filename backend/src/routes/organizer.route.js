import express from "express";
import { getAllOrganizer } from "../controllers/organizer.controller.js";
const router = express.Router();

router.get("/", getAllOrganizer);

export default router;
