import { JWTPayload } from "jose";

export interface Signup {
  name: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = JWTPayload;
