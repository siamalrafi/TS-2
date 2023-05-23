import { createABook, getGenreBook } from "./book.controller";
import express from "express";

const router = express.Router();

router.route("/").post(createABook);
router.route("/").get(getGenreBook);

// export router ---
export default router;
