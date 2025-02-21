"use server";
import db from "@/db";
import { SignupFormSchema } from "./auth-schema";
import { users } from "@/db/schema";
import { encrypt } from "@/helpers";
import { redirect } from "next/navigation";
import { FormState } from "@/types";

export async function signup(
  prevState: any,
  formData: FormData
): Promise<void | FormState> {
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

  // redirect to /login
  redirect("/login");
}

export async function login(formData: FormData) {
  // validate inputs

  // error: return error

  // login user

  // redirect to dashboard
  console.log(formData);
}
