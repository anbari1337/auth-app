import bcrypt from "bcrypt";

export function cryptPassword(password: string) {
  const saltRounds: number = 10;

  return bcrypt.hashSync(password, saltRounds);
}
