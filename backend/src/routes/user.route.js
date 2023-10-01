import express from "express";
const router = express.Router();
import { createUser } from "../controllers/user.controller.js";

/* GET programming languages. */
// router.get("/", programmingLanguagesController.get);

/* POST programming language */
router.post("/users", createUser);

/* PUT programming language */
// router.put("/:id", programmingLanguagesController.update);

/* DELETE programming language */
// router.delete("/:id", programmingLanguagesController.remove);

export default router;
