import AuthorModel from "~/server/models/Author.model";
import { AuthorSchema } from "~/server/validation";

export default defineEventHandler(async (event) => {
  // Correct usage of readBody
  const body = await readBody(event);
  console.log(body);

  // Validate the request body
  let error: any = AuthorSchema.validate(body);

  if (error.error) {
    throw createError({
      message: error.message,
      statusCode: 400,
      fatal: false,
    });
  }

  try {
    // Create a new author
    await AuthorModel.create(body);
    return { message: "Author created successfully" };
  } catch (err) {
    throw createError({
      message: "An error occurred while creating the Author",
      statusCode: 500,
      fatal: true,
    });
  }
});
