"use server";
import db from "@/db";
import "dotenv/config";
import { LoginFormSchema, SignupFormSchema } from "./auth-schema";
import { users } from "@/db/schema";
import { encrypt } from "@/helpers";
import { redirect } from "next/navigation";
import { FormState } from "@/types";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/stateless-session";

export async function signup(formState: FormState, formData: FormData) {
  const result = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success)
    return {
      errors: result.error.flatten().fieldErrors,
    };

  // insert user
  await db.insert(users).values({
    name: result.data.email,
    email: result.data.email,
    password: encrypt(result.data.password),
  });

  redirect("/login");
}

export async function login(formState: FormState, formData: FormData) {
  // validate inputs
  const result = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!result.success)
    return {
      errors: result.error.flatten().fieldErrors,
    };

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, formData.get("email") as string));

  if (!user?.[0]) return { message: "Incorrect email or password!" };

  const isPasswordValid = await bcrypt.compare(
    formData.get("password"),
    user[0].password
  );

  if (!isPasswordValid) return { message: "Incorrect email or password!" };

  await createSession(user[0].id);

  redirect("/");
}
