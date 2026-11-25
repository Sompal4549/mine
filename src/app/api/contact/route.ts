import { NextRequest, NextResponse } from "next/server";
import { saveContactSubmission, getContactSubmissions } from "@/lib/submissions";
import { sendContactNotification, sendContactConfirmation } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate inputs
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, "");
    if (cleanPhone.length < 8) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number (at least 8 digits)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message is required." },
        { status: 400 }
      );
    }

    const submission = await saveContactSubmission({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: service || "General Enquiry",
      message: message.trim(),
    });

    try {
      await sendContactNotification({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        service: submission.service,
        message: submission.message,
        submissionId: submission.id,
      });
    } catch (emailError) {
      console.error("Failed to send contact notification email:", emailError);
    }

    try {
      await sendContactConfirmation({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        submissionId: submission.id,
      });
    } catch (emailError) {
      console.error("Failed to send contact confirmation email to user:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out to Shri Swami Jewellers. We have received your message and will contact you shortly.",
        data: {
          id: submission.id,
          createdAt: submission.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later or contact us directly on WhatsApp." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await getContactSubmissions();
    return NextResponse.json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve contact submissions." },
      { status: 500 }
    );
  }
}
