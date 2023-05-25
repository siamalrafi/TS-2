"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_controller_1 = require("./book.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.route("/").post(book_controller_1.createABook).get(book_controller_1.getGenreBook);
router.route("/query").get(book_controller_1.createQueryBook);
router.route("/update-price").patch(book_controller_1.updatePrice);
// export router ---
exports.default = router;
