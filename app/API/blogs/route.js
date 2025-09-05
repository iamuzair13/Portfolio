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
    const body = await request.json();
    const contact = new Contact(body);
    await contact.save();
    return NextResponse.json({ success: true, message: "Contact saved!" });
  } catch (error) {
    console.log("API Error:", error); // Add this line
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}