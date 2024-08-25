import Book from "../models/book-model.js";

export const getBook = async (req,res)=>{
   try {
    const books = await Book.find();
    if(!books){
        return res.status(404).json({message: "No books found"})
    }

    res.status(200).json(books);
    
   } catch (error) {
    res.status(500).json({ message: error.message });

    
   }
    
}

