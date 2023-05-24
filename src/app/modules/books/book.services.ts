import { IBook } from "./book.interface";
import BookModel from "./book.model";

export const createABookService = async (payload: IBook): Promise<IBook> => {
   // creating a new book
   const Book = BookModel.create(payload);
   console.log(Book);
   return Book;
};

// get a generic book ---
// export const getGenreBookService = async (genre: string): Promise<IBook | null> => {
//    const Books = await BookModel.findOne({ genre: { $eq: genre } });
//    return Books;
// };

// get a new book with aggregate ---
export const getGenreBookService = async (filter: string): Promise<{} | null> => {
   const pipeline = [
      {
         $match: {
            genre: filter,
         },
      },
   ];

   const result = await BookModel.aggregate(pipeline);
   return result;
};

export const createQueryBookService = async (filter: { genre: string; published: string }): Promise<{} | null> => {
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
   const result = await BookModel.aggregate(pipeline);
   return result;
};

export const updatePriceService = async (price: string): Promise<{} | null> => {
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

   const result = await BookModel.aggregate([
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
};
