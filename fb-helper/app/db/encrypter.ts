import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const SALT_ROUNDS = 10;

export async function encryptPassword(password: string) {
  const encryptedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return encryptedPassword;
}

export async function checkPassword(password: string, encryptedPassword: string) {
  const result = await bcrypt.compare(password, encryptedPassword);
  return result;
}

const SECRET_HASH = "asdhf9823hfw98h9283hr89h9whf";

export async function generateJWT(email: string) {
  const token = jwt.sign({ email }, SECRET_HASH);
  return token;
}