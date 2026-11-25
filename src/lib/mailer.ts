import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || "587"),
  secure: process.env.NEXT_PUBLIC_SMTP_SECURE === "true",
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASS,
  },
});

const fromName = process.env.NEXT_PUBLIC_SMTP_FROM_NAME || "Shri Swami Jewellers";
const fromEmail = process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL || process.env.NEXT_PUBLIC_SMTP_USER;
const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || process.env.NEXT_PUBLIC_SMTP_USER;
const adminMobile = process.env.NEXT_PUBLIC_ADMIN_MOBILE || "";

function waLink(phone: string, submissionId: string, prefix: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(
    `${prefix} submission ${submissionId}`
  )}`;
}

function mailtoLink(email: string) {
  return `mailto:${email}`;
}

function telLink(phone: string) {
  return `tel:${phone}`;
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  submissionId: string;
}) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf4e8;">
      <div style="background-color: #fff8ed; border: 2px solid #c18a32; border-radius: 12px; padding: 24px;">
        <h2 style="color: #650d1b; font-family: Georgia, serif; margin-bottom: 16px;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #65564e;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Email:</td>
            <td style="padding: 8px 0; color: #65564e;"><a href="${mailtoLink(data.email)}" style="color: #c18a32;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Phone:</td>
            <td style="padding: 8px 0; color: #65564e;"><a href="${telLink(data.phone)}" style="color: #c18a32;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Service:</td>
            <td style="padding: 8px 0; color: #65564e;">${data.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; color: #65564e; white-space: pre-wrap;">${data.message}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Submission ID:</td>
            <td style="padding: 8px 0; color: #65564e; font-family: monospace; font-size: 12px;">${data.submissionId}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #d8a84e; text-align: center;">
          <a href="${waLink(data.phone, data.submissionId, "Hello Shri Swami Jewellers, regarding contact")}" 
             style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold;">
            WhatsApp Customer (${data.phone})
          </a>
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: adminEmail,
    subject: `New Contact: ${data.name} - ${data.service}`,
    html,
  });
}

export async function sendEnquiryNotification(data: {
  name: string;
  email?: string;
  phone: string;
  service: string;
  message: string;
  imagePreview?: string | null;
  submissionId: string;
}) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf4e8;">
      <div style="background-color: #fff8ed; border: 2px solid #c18a32; border-radius: 12px; padding: 24px;">
        <h2 style="color: #650d1b; font-family: Georgia, serif; margin-bottom: 16px;">New Enquiry Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #65564e;">${data.name}</td>
          </tr>
          ${data.email ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Email:</td>
            <td style="padding: 8px 0; color: #65564e;"><a href="${mailtoLink(data.email)}" style="color: #c18a32;">${data.email}</a></td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Phone:</td>
            <td style="padding: 8px 0; color: #65564e;"><a href="${telLink(data.phone)}" style="color: #c18a32;">${data.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Service:</td>
            <td style="padding: 8px 0; color: #65564e;">${data.service}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; color: #65564e; white-space: pre-wrap;">${data.message}</td>
          </tr>
          ${data.imagePreview ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Attachment:</td>
            <td style="padding: 8px 0; color: #65564e;">Image attached (preview available in admin)</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #241b19;">Submission ID:</td>
            <td style="padding: 8px 0; color: #65564e; font-family: monospace; font-size: 12px;">${data.submissionId}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #d8a84e; text-align: center;">
          <a href="${waLink(data.phone, data.submissionId, "Hello Shri Swami Jewellers, regarding enquiry")}" 
             style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold;">
            WhatsApp Customer (${data.phone})
          </a>
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: adminEmail,
    subject: `New Enquiry: ${data.name} - ${data.service}`,
    html,
  });
}

export async function sendContactConfirmation(data: {
  name: string;
  email: string;
  phone?: string;
  submissionId: string;
}) {
  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: data.email,
    subject: "We've received your message - Shri Swami Jewellers",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf4e8;">
        <div style="background-color: #fff8ed; border: 2px solid #c18a32; border-radius: 12px; padding: 24px;">
          <h2 style="color: #650d1b; font-family: Georgia, serif; margin-bottom: 16px;">Thank You, ${data.name}!</h2>
          <p style="color: #241b19;">We have received your message. Our team will contact you shortly.</p>
          ${data.phone ? `<p style="color: #65564e; font-size: 14px;">Your Phone: <strong>${data.phone}</strong></p>` : ""}
          ${adminMobile ? `<p style="color: #65564e; font-size: 14px;">Contact Us on WhatsApp / Call: <strong>+91 ${adminMobile}</strong></p>` : ""}
          <p style="color: #65564e; font-size: 13px;">Submission ID: ${data.submissionId}</p>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #d8a84e; text-align: center;">
            ${adminMobile ? `
            <a href="${waLink(adminMobile, data.submissionId, "Hello Shri Swami Jewellers, regarding submission")}" 
               style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold; margin-right: 10px;">
              WhatsApp Us (+91 ${adminMobile})
            </a>
            <a href="${telLink("+91" + adminMobile)}" 
               style="display: inline-block; background-color: #c18a32; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold;">
              Call Us (+91 ${adminMobile})
            </a>` : ""}
          </div>
        </div>
      </div>
    `,
  });
}

export async function sendEnquiryConfirmation(data: {
  name: string;
  email?: string;
  phone?: string;
  service: string;
  submissionId: string;
}) {
  if (!data.email) return;
  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to: data.email,
    subject: "We've received your enquiry - Shri Swami Jewellers",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #faf4e8;">
        <div style="background-color: #fff8ed; border: 2px solid #c18a32; border-radius: 12px; padding: 24px;">
          <h2 style="color: #650d1b; font-family: Georgia, serif; margin-bottom: 16px;">Thank You, ${data.name}!</h2>
          <p style="color: #241b19;">Your enquiry for <strong>${data.service}</strong> has been received. Our master artisans will connect with you shortly.</p>
          ${data.phone ? `<p style="color: #65564e; font-size: 14px;">Your Phone: <strong>${data.phone}</strong></p>` : ""}
          ${adminMobile ? `<p style="color: #65564e; font-size: 14px;">Contact Us on WhatsApp / Call: <strong>+91 ${adminMobile}</strong></p>` : ""}
          <p style="color: #65564e; font-size: 13px;">Submission ID: ${data.submissionId}</p>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #d8a84e; text-align: center;">
            ${adminMobile ? `
            <a href="${waLink(adminMobile, data.submissionId, "Hello Shri Swami Jewellers, regarding enquiry")}" 
               style="display: inline-block; background-color: #25d366; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold; margin-right: 10px;">
              WhatsApp Us (+91 ${adminMobile})
            </a>
            <a href="${telLink("+91" + adminMobile)}" 
               style="display: inline-block; background-color: #c18a32; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: bold;">
              Call Us (+91 ${adminMobile})
            </a>` : ""}
          </div>
        </div>
      </div>
    `,
  });
}
