import connectDB from "@/config/db";
import Product from "@/models/Product";
import User from "@/models/User";
import Order from "@/models/Order";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { userId } = getAuth(request);
    const { address, items } = await request.json();

    if (!userId || !address || !items || items.length === 0) {
      return NextResponse.json({ success: false, message: "Invalid data" });
    }

    await connectDB();

    let amount = 0;

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) continue;
      amount += product.offerPrice * item.quantity;
    }

    const order = await Order.create({
      userId,
      address,
      items,
      amount: amount + Math.floor(amount * 0.02),
      date: Date.now(),
    });

    const user = await User.findOne({ clerkId: userId });
    if (user) {
      user.cartItems = {};
      await user.save();
    }

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
