import { Schema, model } from "mongoose";
import { IBook } from "./book.interface";

// Define the Book schema
const bookSchema = new Schema<IBook>({
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
bookSchema.static("bookDetails", async function getDetails() {
   const details = await this.find({ rating: "4" });
});

 
// 3. model declaration ---
const BookModel = model<IBook>("Book", bookSchema);

// export BookModel
export default BookModel;
