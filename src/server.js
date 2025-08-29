import express from "express";
import userRouter from "./routers/user.js";
import cors from "cors";
import { handleError } from "./utils/error.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
mongoose.set("strictQuery", false);

app.use(cors());

app.use((req, res, next) => {
  const { method, path } = req;
  console.log(
    `New request to: ${method} ${path} at ${new Date().toISOString()}`
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/api/v1/users");
});

app.use("/api/v1/users", userRouter);
app.use(handleError);

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
