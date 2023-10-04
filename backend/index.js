import express from "express";
import { PORT, mongodburl } from "./config.js";
import cors from "cors";

import booksRoute from "./routes/booksRoute.js";
import mongoose from "mongoose";
const app = express();

//Middleware for parsing request body
app.use(express.json());

app.use(cors())


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});

app.listen(PORT, () => {
  console.log(`App listening to the port:${PORT}`);
});
app.use("/books",booksRoute)
mongoose
  .connect(mongodburl)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
