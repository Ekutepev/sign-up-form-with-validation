import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z.string().min(1, "First Name is required."),
    lastName: z.string().min(1, "Last Name is required."),
    email: z.email("please enter a valid email address."),
    password: z
      .string()
      .min(8, "password must be at least 8 charecters.")
      .regex(/[A-Z]/, "Password must contain a upper case letter.")
      .regex(/[0-9]/, "Password must contian a number."),
    confirmPassword: z.string().min(1, "Please confirm you password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match, Please try again.",
    path: ["confirmPassword"],
  });

export type SignUpData = z.infer<typeof signUpSchema>;
