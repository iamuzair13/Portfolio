import blog from "@/lib/model/blogs";
import { dbConnection } from "@/lib/utils";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Optional: Connection caching for development
let isConnected = false;

async function connectDB() {
  if (!isConnected) {
    await mongoose.connect(dbConnection);
    isConnected = true;
    console.log("connected to database");
  }
}

export async function GET() {
  try {
    await connectDB();
    const blogs = await blog.find({});
    return NextResponse.json({ result: blogs });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const payload = await request.json();
    const newBlog = new blog(payload);
    const result = await newBlog.save();
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
