import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { syncIndexes } from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Root Route
app.get("/", (request, response) => {
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});


app.use('/books',booksRoute);



// Connect to MongoDB and start server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
