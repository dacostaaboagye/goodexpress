
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, phone, address } = await req.json();

  // Create a transporter object using the default SMTP transport
  // You need to configure your email provider details in environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: process.env.EMAIL_SERVER_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // your email user
      pass: process.env.EMAIL_SERVER_PASSWORD, // your email password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM, // sender address
    to: "richardatobrah23@gmail.com", // list of receivers
    subject: "New Quick Booking Request",
    text: `You have a new booking request:\n\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`,
    html:
      "\n      <h2>New Quick Booking Request</h2>\n      <p><strong>Name:</strong> " + name + "</p>\n      <p><strong>Phone:</strong> " + phone + "</p>\n      <p><strong>Address:</strong> " + address + "</p>\n    ",
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
