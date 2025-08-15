import blog from "@/lib/model/blogs";
import { dbConnection } from "@/lib/utils";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(dbConnection);

  const blogs = await blog.find({});

  console.log("connected to database");
  return NextResponse.json({ result: blogs });
}

export async function POST(request) {
  await mongoose.connect(dbConnection);
  const payload = await request.json()

  const newBlog = new blog(payload);

  const result = await newBlog.save();
  return NextResponse.json({ result });
}
