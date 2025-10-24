
"use server";

import * as z from "zod";
import { Resend } from "resend";
import { ContactRequestEmail } from "@/components/emails/ContactRequestEmail";

const formSchema = z.object({
  name: z.string(),
  agency: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  projectDescription: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, agency, email, phone, projectDescription } = parsed.data;

    const { data, error } = await resend.emails.send({
      from: 'NGONGE RFP <proposals@ngonge.com>',
      to: 'proposals@ngonge.com',
      reply_to: email,
      subject: `New RFP Request from ${name} (${agency})`,
      react: ContactRequestEmail({ name, agency, email, phone, projectDescription }),
    });

    if (error) {
        console.error("Resend error:", error);
        return { success: false, message: "Failed to send email. Please try again later." };
    }

    return { success: true, message: "Form submitted successfully." };

  } catch (error: any) {
    console.error("Error submitting form:", error);
    if (error.message.includes('Missing API key')) {
      return { success: false, message: "Email service is not configured. The RESEND_API_KEY is missing." };
    }
    return { success: false, message: "An unexpected error occurred. Please try again." };
  }
}
