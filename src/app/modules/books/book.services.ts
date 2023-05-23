import { IBook } from "./book.interface";
import BookModel from "./book.model";

export const createABookService = async (payload: IBook): Promise<IBook> => {
   // creating a new book
   const Book = BookModel.create(payload);
   console.log(Book);
   return Book;
};

// get a generic book ---
export const getGenreBookService = async (genre: string): Promise<IBook | null> => {
   const Books = await BookModel.findOne({ genre: { $eq: genre } });
   return Books;
};
