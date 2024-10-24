import AuthorModel from "~/server/models/Author.model";
import { AuthorSchema } from "~/server/validation";
import type { H3Event, EventHandlerRequest } from "h3"; // Assuming h3 is a valid import

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    const body = await readBody(event);
    const params: any = event.context.params;

    const error: any = AuthorSchema.validate(body, {
      abortEarly: true,
      allowUnknown: true,
    });
    if (error.error) {
      throw createError({
        message: error.message,
        statusCode: 400,
        fatal: false,
      });
    }

    try {
      await AuthorModel.findByIdAndUpdate(params.id, body);
      return { message: "Author updated" };
    } catch (error: any) {
      throw createError({
        message: error.message,
        statusCode: 500,
        fatal: true,
      });
    }
  }
);
