"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

// ✅ Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  agency: z.string().min(2, { message: "Agency/Organization is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  projectDescription: z
    .string()
    .min(10, { message: "Please provide a brief description." }),
  recaptchaToken: z.string().min(1, {
    message: "Please complete the reCAPTCHA security check.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      agency: "",
      email: "",
      phone: "",
      projectDescription: "",
      recaptchaToken: "",
    },
  });

  const handleRecaptchaChange = (token: string | null) => {
    form.setValue("recaptchaToken", token || "");
    if (token) form.trigger("recaptchaToken");
  };

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);

    const templateParams = {
      name: values.name,
      agency: values.agency,
      email: values.email,
      phone: values.phone || "N/A",
      projectDescription: values.projectDescription,
    };

    try {
      // ✅ Send email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "✅ Submission Successful",
        description: "Thank you for your message. We’ll be in touch shortly.",
      });

      form.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        variant: "destructive",
        title: "❌ Submission Failed",
        description: "An unexpected error occurred. Please try again.",
      });
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  const isRecaptchaAvailable = !!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agency / Organization</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Department of Defense" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="name@agency.gov" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your project requirements..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ✅ reCAPTCHA section */}
        {isRecaptchaAvailable ? (
          <FormField
            control={form.control}
            name="recaptchaToken"
            render={() => (
              <FormItem className="pt-2">
                <FormLabel>Security Check</FormLabel>
                <FormControl>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={handleRecaptchaChange}
                    onExpired={() => handleRecaptchaChange(null)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <p className="text-sm text-red-500">
            ⚠️ ReCAPTCHA is not configured. Please set{" "}
            <code>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> in your .env.local file.
          </p>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </Form>
  );
}