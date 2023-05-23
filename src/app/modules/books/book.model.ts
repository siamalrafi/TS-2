import { Schema, model, Model } from "mongoose";
import { IBook } from "./book.interface";

// Define the Book schema
const bookSchema = new Schema<IBook>({
   title: { type: String, required: true },
   author: { type: [String], required: true },
   genre: { type: String, required: true },
   publicationYear: { type: Number, required: true },
   rating: { type: Number, required: true },
   price: { type: Number, required: true },
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
});

// 3. model declaration ---
const BookModel = model<IBook>("Book", bookSchema);

// export User
export default BookModel;
