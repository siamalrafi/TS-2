import { NextFunction, Request, Response } from "express";
import { createABookService } from "./book.services";

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
      });
   }
};
