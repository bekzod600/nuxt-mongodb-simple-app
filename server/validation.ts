import Joi from "joi";

export const AuthorSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
});

export const BookSchema = Joi.object({
  title: Joi.string().min(2).max(100).required(),
  isbn: Joi.string().min(2).max(50).required(),
  authors: Joi.array(),
  published: Joi.date().required(),
  pageCount: Joi.number(),
});
