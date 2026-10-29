import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First Name must be at least 2 characters.")
      .max(30, "First name has to be less then 30 characters."),
    lastName: z
      .string()
      .min(2, "Last Name is requires at least 2 characters.")
      .max(30, "Last name has to be less then 30 characters."),
    email: z.email("Please enter a valid email address."),
    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters including an upper case and number.",
      )
      .regex(/[A-Z]/, "Password must contain a upper case letter.")
      .regex(/[0-9]/, "Password must contain a number."),
    confirmPassword: z.string().min(1, "Please confirm you password.").trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match, Please try again.",
    path: ["confirmPassword"],
  });

export type SignUpData = z.infer<typeof signUpSchema>;
