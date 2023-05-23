import { NextFunction, Request, Response } from "express";
import { createABookService, createQueryBookService, getGenreBookService, updatePriceService } from "./book.services";

export const createABook = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const result = await createABookService(req.body);

      res.status(200).json({
         status: "success",
         message: "success create a book",
         result: result,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "create a book failed",
         error: error.message,
      });
   }
};

export const getGenreBook = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const filter = (req?.query?.genre as string) || "";

      const result = await getGenreBookService(filter);

      res.status(200).json({
         status: "success",
         message: "success create a book",
         result: result,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "create a book failed",
         error: error.message,
      });
   }
};

// createQueryBook
export const createQueryBook = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const genre = (req?.query?.genre as string) || "";
      const published = (req?.query?.published as string) || "";

      const filter = { genre, published };
      const result = await createQueryBookService(filter);

      res.status(200).json({
         status: "success",
         message: "success create a book",
         result: result,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "create a book failed",
         error: error.message,
      });
   }
};

export const updatePrice = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const price = (req?.query?.price as string) || "";
      const result = await updatePriceService(price);

      res.status(200).json({
         status: "success",
         message: "success create a book",
         result: result
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: "update book price failed.",
         result: error.message,
      });
   }
};
