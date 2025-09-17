import { dbConnection } from "@/lib/utils";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { put } from "@vercel/blob";


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
  latest: Boolean,
  publishedAt: String,
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

export async function GET(request) {
  try {
    await connectDB();

    const blogs = await Blog.find({});
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
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
  latest: formData.get("latest") === "true" || formData.get("latest") === "on",
  publishedAt: formData.get("publishedAt")
    ? new Date(formData.get("publishedAt"))
    : null,
  blogImage: formData.get("blogImage")?.name || null,
};


    // Handle file upload
    const file = formData.get("blogImage");
    const blob = await put(`Programmers-Squad-Assets/${file.name}`, file, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN_READ_WRITE_TOKEN,
    });

    console.log("Uploaded file to Vercel Blob:", blob);
    

    let filePath = null;

    // if (file && file.name) {
    //   const bytes = await file.arrayBuffer();
    //   const buffer = Buffer.from(bytes);

    //   const uploadDir = path.join(process.cwd(), "public", "uploads", "blogs");
    //   await fs.mkdir(uploadDir, { recursive: true });

    //   // 🔥 Sanitize filename
    //   const originalName = file.name.toLowerCase().replace(/\s+/g, "-"); // spaces -> hyphens
    //   const safeName = originalName.replace(/[^a-z0-9.\-]/g, ""); //

    //   const fileName = `${Date.now()}-${safeName}`;
    //   filePath = `/uploads/blogs/${fileName}`;
    //   await fs.writeFile(path.join(uploadDir, fileName), buffer);
    // }

    // Save to DB
    const blog = new Blog({ ...blogData, blogImage: filePath, blogImage: blob.url });
    console.log("Blog data to save:", blog);
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
