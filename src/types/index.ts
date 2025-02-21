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
      errors: {
        name?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
      };
    }
  | undefined;
