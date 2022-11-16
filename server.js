const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-route");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
mongoose
  .connect(
    "mongodb+srv://Book:Book@cluster0.naquw0w.mongodb.net/?retryWrites=true&w=majority"
  ).then(() => {
    app.listen(5000);
  })
  .then(() => console.log("Connected To Database and Server is Running"))
 


