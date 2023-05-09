import express from "express";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import path from "path";
import morgan from "morgan";

import connectDB from "./config/mongoDBConfig.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

connectDB();
const app = express();


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoutes);
app.use("/student", studentRoutes);
app.use("/attendance", attendanceRoutes);

const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("API is running....");
});
app.use(errorHandler);
app.use(notFound);

const PORT = 5000;

app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`)
);
