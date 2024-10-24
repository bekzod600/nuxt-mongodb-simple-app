import AuthorModel from "~/server/models/Author.model";
import type { H3Event, EventHandlerRequest } from "h3"; // Assuming h3 is a valid import

export default defineEventHandler(
  async (event: H3Event<EventHandlerRequest>) => {
    const params: any = event.context.params;

    try {
      await AuthorModel.findByIdAndDelete(params.id);
      return { message: "Author removed" };
    } catch (error: any) {
      throw createError({
        message: error.message,
        statusCode: 500,
        fatal: true,
      });
    }
  }
);
