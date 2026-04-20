import { NextResponse } from "next/server";
import ConnectDb from "./lib/mongoDb";
import mongoose from "mongoose";
import Contact from "../models/contact";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();
  // Process the contact form data (e.g., save to database, send email)

  try {
    await ConnectDb();
    await Contact.create({ name, email, phone, message });

    return NextResponse.json({
      msg: ["Form data received successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(e.message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({
        msg: [
          "An error occurred while processing your request. Please try again later.",
        ],
      });
    }
  }
}
