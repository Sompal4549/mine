import { NextRequest, NextResponse } from "next/server";
import { saveEnquirySubmission, getEnquirySubmissions } from "@/lib/submissions";
import { sendEnquiryNotification, sendEnquiryConfirmation } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, imagePreview } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
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

    if (email && typeof email === "string" && email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address." },
          { status: 400 }
        );
      }
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Please provide your message or requirement." },
        { status: 400 }
      );
    }

    const submission = await saveEnquirySubmission({
      name: name.trim(),
      email: email ? email.trim().toLowerCase() : undefined,
      phone: phone.trim(),
      service: service || "Custom Jewellery Design",
      message: message.trim(),
      imagePreview: imagePreview || null,
    });

    try {
      await sendEnquiryNotification({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        service: submission.service,
        message: submission.message,
        imagePreview: submission.imagePreview,
        submissionId: submission.id,
      });
    } catch (emailError) {
      console.error("Failed to send enquiry notification email:", emailError);
    }

    try {
      await sendEnquiryConfirmation({
        name: submission.name,
        email: submission.email,
        phone: submission.phone,
        service: submission.service,
        submissionId: submission.id,
      });
    } catch (emailError) {
      console.error("Failed to send enquiry confirmation email to user:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received successfully. Our master artisans will connect with you shortly.",
        data: {
          id: submission.id,
          createdAt: submission.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing enquiry submission:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later or reach out directly on WhatsApp." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await getEnquirySubmissions();
    return NextResponse.json({
      success: true,
      count: submissions.length,
      data: submissions,
    });
  } catch (error) {
    console.error("Error fetching enquiry submissions:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve enquiry submissions." },
      { status: 500 }
    );
  }
}
