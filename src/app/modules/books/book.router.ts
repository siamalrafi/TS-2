import { createABook } from "./book.controller";
import express from "express";

const router = express.Router();


router.route("/").post(createABook);


// export router ---
export default router;
