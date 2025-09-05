import { dbConnection } from "@/lib/utils";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Define a simple schema/model if you don't have one
const contactSchema = new mongoose.Schema({
  BusinessEmail: String,
  budget: String,
  projectDetails: String,
  referance: String,
});
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

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
    const body = await request.json();
    const contact = new Contact(body);
    await contact.save();
    return NextResponse.json({ success: true, message: "Contact saved!" });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}