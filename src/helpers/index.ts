import bcrypt from "bcrypt";

export function encrypt(password: string) {
  const saltRounds: number = 10;

  return bcrypt.hashSync(password, saltRounds);
}
