import { signupUser } from "@/app/db/db";
import { UserSignupData } from "@/app/interfaces/signup";
import { NextRequest, NextResponse } from "next/server";



// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export async function POST(request: NextRequest) {
  const data: UserSignupData = await request.json();
  const success = await signupUser(data);

  if(success) {
    return NextResponse.json({success: true, status: "Signup Success!"});
  } else {
    return NextResponse.json({success: false, status: "Signup Failure, try again."});
  }
}
