import { getUserFromEmail } from "@/app/db/db";
import { checkPassword, generateJWT } from "@/app/db/encrypter";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const data = await request.json();

  const user = await getUserFromEmail(data.email);

  if(!user) {
    return NextResponse.json({success: false, status: "No User found"});
  } 

  const passwordCorrect = await checkPassword(data.password, user.password);
  if(passwordCorrect) {
    // return JWT here
    const token = await generateJWT(data.email);
    return NextResponse.json({ success: true,  token });
  } else {
    return NextResponse.json({ success: false, status: "Incorrect Credentials"});
  }
}