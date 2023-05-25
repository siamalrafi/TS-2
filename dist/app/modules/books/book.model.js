"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the Book schema
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: {
        name: { type: String, required: true },
        location: { type: String, required: true },
    },
    reviews: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
        },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required: true },
});
// static methods ---
bookSchema.static("bookDetails", function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const details = yield this.find({ rating: "4" });
    });
});
// 3. model declaration ---
const BookModel = (0, mongoose_1.model)("Book", bookSchema);
// export BookModel
exports.default = BookModel;
