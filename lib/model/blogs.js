import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, required: true },
  latest: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
});

const blog =
  mongoose.models.blogs || mongoose.model("blogs", blogsSchema, "blogs");

export default blog;
