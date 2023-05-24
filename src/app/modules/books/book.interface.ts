import { Model, Schema, model } from "mongoose";
import BookModel from "./book.model";

// create a new interface for the books ---
export interface IBook {
   title: string;
   author: string[];
   genre: string;
   publicationYear: number;
   publisher: {
      name: string;
      location: string;
   };
   reviews: {
      user: string;
      comment: string;
   }[];
   rating: number;
   price: string;
}

interface BookDetailsModel extends Model<IBook> {
   getDetails(): IBook[];
}

const schema = new Schema<IBook, BookDetailsModel>({ title: String });
schema.static("myStaticMethod", function myStaticMethod() {
   return 42;
});

const User = model<IBook, BookDetailsModel>("User", schema);

// const answer: number = User.getDetails(); // 42
