"use client";
import { login } from "@/app/auth";
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

const Login = () => {
  const [state, action, isPending] = useActionState(login, undefined);

  console.log(state);
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-6'>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password' required />
              </div>
              <Error message={state?.errors as string} />
              <Button type='submit' className='w-full'>
                {isPending ? "Loading..." : "Login"}
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Don&apos;t have an account?{" "}
              <Link href='/signup' className='underline underline-offset-4'>
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
