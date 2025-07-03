'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// Define validation schema for contact form
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes')
    .trim(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes')
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(100, 'Email must be less than 100 characters')
    .toLowerCase()
    .trim(),
  company: z
    .string()
    .min(1, 'Company name is required')
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s\-'&.,()]+$/, 'Company name contains invalid characters')
    .trim(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .trim()
});

interface FormState {
  success?: boolean;
  error?: string;
  message?: string;
}

// Email sending function using Resend
async function sendContactEmail(data: {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}) {
  // Initialize Resend with API key
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Email content
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
        New Contact Form Submission - AENTX
      </h2>
      
      <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #4F46E5; margin-top: 0;">Contact Information</h3>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Company:</strong> ${data.company}</p>
      </div>

      <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h3 style="color: #333; margin-top: 0;">Message</h3>
        <p style="line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
      </div>

      <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-radius: 8px; font-size: 12px; color: #6b7280;">
        <p><strong>Submission Details:</strong></p>
        <p>Date: ${new Date().toLocaleString()}</p>
        <p>Source: AENTX Contact Form</p>
      </div>
    </div>
  `;

  const emailText = `
New Contact Form Submission - AENTX

Contact Information:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Company: ${data.company}

Message:
${data.message}

Submission Date: ${new Date().toLocaleString()}
Source: AENTX Contact Form
  `;

  // Send email using Resend
  const result = await resend.emails.send({
    from: `AENTX Contact Form <${process.env.FROM_EMAIL}>`,
    to: process.env.TO_EMAIL!,
    subject: `New Contact: ${data.firstName} ${data.lastName} from ${data.company}`,
    text: emailText,
    html: emailHtml,
    replyTo: data.email, // Allow easy reply to the person who submitted
  });

  if (result.error) {
    throw new Error(`Resend API error: ${result.error.message}`);
  }

  return result.data?.id;
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Extract raw form data
    const rawData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message')
    };

    // Validate and sanitize the data
    const validatedData = contactFormSchema.parse(rawData);

    // Create final contact data object with timestamp
    const contactData = {
      ...validatedData,
      submittedAt: new Date().toISOString(),
      userAgent: process.env.NODE_ENV === 'development' ? 'dev' : 'unknown', // Could add headers if needed
      ip: 'hidden' // Could add real IP tracking if needed
    };

    console.log('✅ Valid contact form submission received:', contactData);

    // Send email notification
    try {
      await sendContactEmail(validatedData);
      console.log('✅ Contact email sent successfully');
    } catch (emailError) {
      console.error('❌ Failed to send contact email:', emailError);
      // Continue execution - don't fail the whole form if email fails
    }

    // Return success state
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    };

  } catch (error) {
    if (error instanceof z.ZodError) {
      // Log validation errors for security monitoring
      console.error('❌ Contact form validation failed:', {
        errors: error.errors,
        timestamp: new Date().toISOString(),
        formData: Object.fromEntries(formData.entries()) // Log what was submitted
      });
      
      // Return validation error
      const errorMessage = error.errors[0]?.message || 'Invalid form data';
      return {
        success: false,
        error: errorMessage
      };
    }

    // Log unexpected errors
    console.error('❌ Unexpected error in contact form submission:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again.'
    };
  }
}
