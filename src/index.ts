import express from "express";
const app = express();
import { notFound } from "./middleware/not-found";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import authRoute from "./routes/auth";
import userRoute from "./routes/user";
import productRoute from "./routes/product";
import categoryRoute from "./routes/category";
import transactionRoute from "./routes/transaction";
import dotenv from "dotenv";
import cors from "cors";
import * as userService from "./services/user.service";
dotenv.config();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);
app.use("/api/transaction", transactionRoute);

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
    userService.Init();
  } catch (err) {
    console.log(err);
  }
};

start();
