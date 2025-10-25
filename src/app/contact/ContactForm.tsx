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
// ADDED: Import the ReCAPTCHA component
import ReCAPTCHA from "react-google-recaptcha";

// Extend the formSchema to include the reCAPTCHA token
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    agency: z.string().min(2, { message: "Agency/Organization is required." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    projectDescription: z.string().min(10, { message: "Please provide a brief description." }),
    // NEW: Captcha token validation (must be a string and not empty)
    recaptchaToken: z.string().min(1, { message: "Please complete the reCAPTCHA security check." }),
});

// Define the form data type including the token
type ContactFormValues = z.infer<typeof formSchema>;


export function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Ref to access the reCAPTCHA component methods (like reset)
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            agency: "",
            email: "",
            phone: "",
            projectDescription: "",
            recaptchaToken: "", // Initialize recaptchaToken field
        },
    });

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
            // Note: In a secure app, you would verify the recaptchaToken on your server
            // before calling EmailJS. For a client-side solution, we rely on Zod and
            // the user completing the client-side challenge.
            
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
            // Reset the reCAPTCHA box after success
            recaptchaRef.current?.reset();

        } catch (error) {
            console.error("EmailJS error:", error);
            toast({
                variant: "destructive",
                title: "❌ Submission Failed",
                description: "An unexpected error occurred. Please try again.",
            });
            // Reset the reCAPTCHA box on failure
            recaptchaRef.current?.reset();
        }

        setIsSubmitting(false);
    }

    // Function to handle reCAPTCHA change and update the form's token field
    const handleRecaptchaChange = (token: string | null) => {
        form.setValue("recaptchaToken", token || "");
        // Manually trigger validation to clear error if token is present
        if (token) {
            form.trigger("recaptchaToken");
        }
    };

    // Check if the site key is available
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

                {/* --- NEW RECAPTCHA FIELD --- */}
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
                                        onExpired={() => handleRecaptchaChange(null)} // Clear token on expiration
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ) : (
                    <p className="text-sm text-red-500">
                        *ReCAPTCHA is not configured. Please set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in your environment variables.*
                    </p>
                )}
                {/* --- END RECAPTCHA FIELD --- */}

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