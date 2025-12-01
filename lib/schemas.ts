// lib/schemas.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters"),
  lastName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number is too short").regex(/^\+?[0-9\s\-\(\)]+$/, "Invalid phone format (must include country code)"),
  projectType: z.string().min(1, "Please select an option"), 
  
  // Makes briefing optional. Allows empty string OR a string min 10 chars.
  briefing: z.union([
    z.literal(""), 
    z.string().min(10, "The description must contain a minimum of 10 characters if provided.")
  ]).optional(),
  
  nda: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;