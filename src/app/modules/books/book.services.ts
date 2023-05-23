// createABook
import { NextFunction, Response } from "express";
import BookModel from "./book.model";
import { IBook } from "./book.interface";

// create a new user ---
export const createABook = async (payload: IBook): Promise<IBook> => {
   // creating a new user
   const user = new BookModel(payload); //User -> class  user -> instance
   await user.save();

   console.log(user.title);
   return user;
};
/* 
//  get all users ---
export const getUserFromDB = async () => {
   const user = await User.find();
   return user;
};

// get user by id ---
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
   const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
   return user;
};

// get all admin users ---

export const getAdminUserFromDB = async () => {
   const admins = await User.getAdminUsers("nadnds");
   console.log(admins);
   return admins;
};
 */
