export const runtime = "nodejs";       
export const dynamic = "force-dynamic"; 

import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  return NextResponse.json({
    success: true,
    user: {
      _id: userId,
      cartItems: {},
    },
  });
}
