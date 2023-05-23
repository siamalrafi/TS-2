import express from "express";
// import { createUser, getUsers, getUserById, getAdminUsers } from "./user.controller";



const router = express.Router();

// router.route("/", controller);

router.route("/create-book").post(createUser);

export default router;
