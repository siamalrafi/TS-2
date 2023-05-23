import mongoose from "mongoose";
import "colors";
import app from "./app";

const PORT: number | string = process.env.PORT || 5000;

// database connection ---
async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/assignment-2");
   console.log("database connection established.".red);
}

main().catch((err) => console.log(err));




app.listen(PORT, () => {
   console.log(`Server is on port http://localhost:${PORT}`.green.bold);
});