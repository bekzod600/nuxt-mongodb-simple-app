import BooksModel from "~/server/models/Books.model";
import { BookSchema } from "~/server/validation";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const error: any = BookSchema.validate(body);

  if (error.error) {
    throw createError({
      message: JSON.stringify(error.error),
      statusCode: 400,
      fatal: false,
    });
  }

  try {
    await BooksModel.create(body);
    return { message: "Book created successfully" };
  } catch (error) {
    throw createError({
      message: "An error occurred while creating the book",
      statusCode: 500,
      fatal: true,
    });
  }
});
