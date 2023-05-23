import express, { Application } from "express";
import cors from "cors";
import "colors";

const app: Application = express();

// using cors
app.use(cors());

// parse data ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/user", userRoutes);

export default app;

// app.listen(PORT, () => {
//     console.log(`Example app listening on port http://localhost:${PORT}`);
//  });
