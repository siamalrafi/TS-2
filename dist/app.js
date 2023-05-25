"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("colors");
const book_router_1 = __importDefault(require("../src/app/modules/books/book.router"));
const app = (0, express_1.default)();
// using cors
app.use((0, cors_1.default)());
// parse data ---
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/book", book_router_1.default);
exports.default = app;
// app.listen(PORT, () => {
//     console.log(`Example app listening on port http://localhost:${PORT}`);
//  });
