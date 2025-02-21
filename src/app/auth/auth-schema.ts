import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

export const SignupFormSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email("Please provide a valid email!"),
  password: z.string().regex(passwordRegex, "Please provide a strong password"),
});

export const LoginFormSchema = z.object({
  email: z.string().email("Please provide a valid email!"),
  password: z.string().regex(passwordRegex, "Please provide a strong password"),
});
