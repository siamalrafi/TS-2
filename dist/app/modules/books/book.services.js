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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePriceService = exports.createQueryBookService = exports.getGenreBookService = exports.createABookService = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createABookService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // creating a new book
    const Book = book_model_1.default.create(payload);
    console.log(Book);
    return Book;
});
exports.createABookService = createABookService;
// get a generic book ---
// export const getGenreBookService = async (genre: string): Promise<IBook | null> => {
//    const Books = await BookModel.findOne({ genre: { $eq: genre } });
//    return Books;
// };
// get a new book with aggregate ---
const getGenreBookService = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    const pipeline = [
        {
            $match: {
                genre: filter,
            },
        },
    ];
    const result = yield book_model_1.default.aggregate(pipeline);
    return result;
});
exports.getGenreBookService = getGenreBookService;
const createQueryBookService = (filter) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("filter", filter);
    const pipeline = [
        {
            $match: {
                genre: filter.genre, // Filter by genre "Sci-Fi"
            },
        },
        {
            $match: {
                "publisher.name": filter.published, // Filter by publisher "Roli Books"
            },
        },
    ];
    // Execute the aggregation pipeline
    const result = yield book_model_1.default.aggregate(pipeline);
    return result;
});
exports.createQueryBookService = createQueryBookService;
const updatePriceService = (price) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(parseInt(price));
    /*    const data = await BookModel.aggregate([
       {
          $match: {
             publishDate: { $gte: 2022 },
             price: { $type: "string" },
          },
       },
       {
          $addFields: { price: 2000 },
       },
    ]);
 
    return data; */
    const result = yield book_model_1.default.aggregate([
        // {
        //    $match: {
        //       publishDate: { $gte: 2022 },
        //       price: { $type: "string" },
        //    },
        // },
        /* ---------------------------------------------
        you need to match data by date and price ---
        ----------------------------------------------*/
        {
            $addFields: {
                price: {
                    $toInt: {
                        $floor: {
                            $multiply: [{ $rand: {} }, parseInt(price)], // input value
                        },
                    },
                },
            },
        },
        {
            $merge: {
                into: "books",
            },
        },
    ]);
    return result;
});
exports.updatePriceService = updatePriceService;
// static methods ---
