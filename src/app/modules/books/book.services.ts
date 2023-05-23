import { IBook } from "./book.interface";
import BookModel from "./book.model";

export const createABookService = async (payload: IBook): Promise<IBook> => {
   // creating a new book
   const Book = BookModel.create(payload);
   console.log(Book);
   return Book;
};
