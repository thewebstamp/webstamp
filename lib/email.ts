// lib/email.ts

import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  serviceInterest: string;
  message: string;
}) {
  const { name, email, phone, company, serviceInterest, message } = data;

  // Email to admin
  const adminMailOptions = {
    from: process.env.SMTP_FROM || "noreply@webstamp.com",
    to: process.env.ADMIN_EMAIL || "admin@webstamp.com",
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0f3b2c; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0f3b2c; }
          .value { margin-top: 5px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            ${
              phone
                ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${phone}</div>
            </div>
            `
                : ""
            }
            ${
              company
                ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            `
                : ""
            }
            <div class="field">
              <div class="label">Service Interest:</div>
              <div class="value">${serviceInterest}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
          <div class="footer">
            <p>This message was sent from your website contact form.</p>
            <p>View in admin dashboard: ${process.env.NEXT_PUBLIC_APP_URL}/admin/contacts</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  // Auto-reply to customer
  const customerMailOptions = {
    from: process.env.SMTP_FROM || "noreply@webstamp.com",
    to: email,
    subject: "Thank you for contacting The Webstamp Agency",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0f3b2c; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .button { display: inline-block; padding: 10px 20px; background: #0f3b2c; color: white; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us!</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to The Webstamp Agency. We have received your message and will get back to you within 24 hours.</p>
            <p>Here's a summary of your request:</p>
            <div class="field">
              <div class="label">Service Interest:</div>
              <div class="value">${serviceInterest}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${message.substring(0, 200)}${message.length > 200 ? "..." : ""}</div>
            </div>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Check out our <a href="${process.env.NEXT_PUBLIC_APP_URL}/services">services</a> page</li>
              <li>View our <a href="${process.env.NEXT_PUBLIC_APP_URL}/pricing">pricing plans</a></li>
              <li>Read client <a href="${process.env.NEXT_PUBLIC_APP_URL}/testimonials">testimonials</a></li>
            </ul>
            <p>If you need immediate assistance, please call us at +1 (555) 123-4567.</p>
            <p>Best regards,<br>The Webstamp Agency Team</p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/contact" class="button">Visit Our Website</a>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} The Webstamp Agency. All rights reserved.</p>
            <p>123 Business Ave, Suite 100, New York, NY 10001</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    throw error;
  }
}
