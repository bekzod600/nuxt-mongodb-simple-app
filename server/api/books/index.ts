import BooksModel from "~/server/models/Books.model";

export default defineEventHandler(async (event) => {
  return await BooksModel.find().populate("authors");
});
