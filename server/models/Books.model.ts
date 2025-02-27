import mongoose from "mongoose";

const schema: mongoose.Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    published: { type: Date, required: true },
    isbn: String,
    authors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    pageCount: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", schema);
