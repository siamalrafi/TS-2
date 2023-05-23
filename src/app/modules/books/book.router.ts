import { createABook, createQueryBook, getGenreBook, updatePrice } from "./book.controller";
import express from "express";

const router = express.Router();

router.route("/").post(createABook).get(getGenreBook);

router.route("/query").get(createQueryBook);

router.route("/update-price").patch(updatePrice);

// export router ---
export default router;
