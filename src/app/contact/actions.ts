"use server";

import * as z from "zod";

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

  // Here you would integrate with Firebase to:
  // 1. Store the submission in Firestore.
  //    e.g., await db.collection('contacts').add(parsed.data);
  // 2. Trigger a Cloud Function to send an email notification.
  //    e.g., using a "Send Email" extension or a custom function with Nodemailer/SendGrid.
  // 3. Handle file uploads by first uploading to Firebase Storage from the client
  //    and then passing the file URL in this submission.

  console.log("Form submission received:", parsed.data);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful submission
  return { success: true, message: "Form submitted successfully." };
}
