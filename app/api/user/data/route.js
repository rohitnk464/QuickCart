import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await connectDB();

    const { userId } = getAuth(request);   // 👈 IMPORTANT CHANGE
    const clerkUser = await currentUser();

    if (!userId || !clerkUser) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      user = await User.create({
        clerkId: userId,
        name: clerkUser.firstName,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        imageUrl: clerkUser.imageUrl,
        cartItems: {}
      });
    }

    return NextResponse.json({ success: true, user });

  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
