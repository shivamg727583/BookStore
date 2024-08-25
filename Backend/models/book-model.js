import mongoose from "mongoose";

// Define the schema for a Book
const BookSchema = new mongoose.Schema({
    name: String,
    title: String,
    price: Number,
    category: String,
    image: String,
    type: String
}, { timestamps: true });

// Export the model using ES6 module syntax
const Book = mongoose.model("Books", BookSchema);

export default Book;
