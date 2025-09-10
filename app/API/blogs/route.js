import { dbConnection } from "@/lib/utils";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Define schema
const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  excerpt: String,
  category: String,
  tags: String,
  seoTitle: String,
  seoDescription: String,
  keywords: String,
  author: String,
  publishedAt: Date,
  blogImage: String, // store file name or URL
});

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);

let isConnected = false;
async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(dbConnection);
    isConnected = true;
  }
}

export async function POST(request) {
  try {
    await connectDB();

    // 🔥 Get FormData instead of JSON
    const formData = await request.formData();

    // Extract fields
    const blogData = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      content: formData.get("content"),
      excerpt: formData.get("excerpt"),
      category: formData.get("category"),
      tags: formData.get("tags"),
      seoTitle: formData.get("seoTitle"),
      seoDescription: formData.get("seoDescription"),
      keywords: formData.get("keywords"),
      author: formData.get("author"),
      publishedAt: formData.get("publishedAt")
        ? new Date(formData.get("publishedAt"))
        : null,
      blogImage: formData.get("blogImage")?.name || null, // just file name for now
    };

    // Save to DB
    const blog = new Blog(blogData);
    await blog.save();

    return NextResponse.json({ success: true, message: "Blog saved!" });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
