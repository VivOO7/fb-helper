import { UserSignupData } from "../interfaces/signup";
import { PrismaClient } from "@prisma/client";
import { encryptPassword } from "./encrypter";

const prisma = new PrismaClient();

export async function signupUser(userData: UserSignupData) {

  try {
    const data = userData;
    userData.password = await encryptPassword(userData.password);
    const user = await prisma.user.create({ data: data });
    return true;
  } catch (err) {
    console.error(err)
  }
  return false;
}

export async function getUserFromEmail(email: string) {
  const user = await prisma.user.findUnique({ where: {
    email: email
  }});

  return user;
}