import { createABook } from "./book.controller";
import express from "express";

const router = express.Router();

// router.route("/", controller);

router.route("/").post(createABook);

export default router;
