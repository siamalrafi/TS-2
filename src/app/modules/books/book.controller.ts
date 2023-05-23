import { NextFunction, Request, Response } from "express";
// import { createUserToDB, getAdminUserFromDB, getUserByIdFromDB, getUserFromDB } from "./user.services";

// create a new user ---
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const data = req.body;
      const user = await createABook(data);
      res.status(200).json({
         status: "success",
         data: user,
      });
   } catch (error) {
      res.status(400).json({
         status: "error",
         message: error.message,
      });
   }
};

// // get all users ---
// export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
//    const result = await getUserFromDB();
//    res.status(200).json({
//       status: "success",
//       data: result,
//    });
// };

// // get user by id ---
// export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
//    try {
//       const { id } = req.params;
//       const user = await getUserByIdFromDB(id);

//       res.status(200).json({
//          status: "success",
//          data: user,
//       });
//    } catch (error) {
//       res.status(400).json({
//          status: "error",
//          message: error.message,
//       });
//    }
// };

// export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
//    const user = await getAdminUserFromDB();
//    console.log("hitted from getAdminUsers");

//    res.status(200).json({
//       status: "success",
//       data: user,
//    });
// };
