"use client";
import { signup } from "@/app/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Error from "@/components/ui/error";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useActionState } from "react";

const Signup = () => {
  const [state, formAction, isPending] = useActionState(signup, null);

  console.log(state?.errors);
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-6'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle className='text-2xl'>Signup</CardTitle>
          <CardDescription>
            Fill the form below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='name'>Full name</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Enter your full name'
                  required
                />
                <Error message={state?.errors?.["name"]?.[0]} />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
                <Error message={state?.errors?.["email"]?.[0]} />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' type='password' name='password' required />
                <Error message={state?.errors?.["password"]?.[0]} />
              </div>
              <Button type='submit' className='w-full'>
                {isPending ? "Loading..." : "Signup"}
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{" "}
              <Link href='/login' className='underline underline-offset-4'>
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
