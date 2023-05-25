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
exports.updatePrice = exports.createQueryBook = exports.getGenreBook = exports.createABook = void 0;
const book_services_1 = require("./book.services");
const createABook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, book_services_1.createABookService)(req.body);
        res.status(200).json({
            status: "success",
            message: "success create a book",
            result: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "create a book failed",
            error: error.message,
        });
    }
});
exports.createABook = createABook;
const getGenreBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const filter = ((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.genre) || "";
        const result = yield (0, book_services_1.getGenreBookService)(filter);
        res.status(200).json({
            status: "success",
            message: "success create a book",
            result: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "create a book failed",
            error: error.message,
        });
    }
});
exports.getGenreBook = getGenreBook;
// createQueryBook
const createQueryBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _c;
    try {
        const genre = ((_b = req === null || req === void 0 ? void 0 : req.query) === null || _b === void 0 ? void 0 : _b.genre) || "";
        const published = ((_c = req === null || req === void 0 ? void 0 : req.query) === null || _c === void 0 ? void 0 : _c.published) || "";
        const filter = { genre, published };
        const result = yield (0, book_services_1.createQueryBookService)(filter);
        res.status(200).json({
            status: "success",
            message: "success create a book",
            result: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "create a book failed",
            error: error.message,
        });
    }
});
exports.createQueryBook = createQueryBook;
const updatePrice = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        const price = ((_d = req === null || req === void 0 ? void 0 : req.query) === null || _d === void 0 ? void 0 : _d.price) || "";
        const result = yield (0, book_services_1.updatePriceService)(price);
        res.status(200).json({
            status: "success",
            message: "success create a book",
            result: result,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            message: "update book price failed.",
            result: error.message,
        });
    }
});
exports.updatePrice = updatePrice;
