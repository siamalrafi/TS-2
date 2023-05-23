import { createABook, createQueryBook, getGenreBook } from "./book.controller";
import express from "express";

const router = express.Router();

router.route("/").post(createABook).get(getGenreBook);

router.route("/query").get(createQueryBook)

// export router ---
export default router;
