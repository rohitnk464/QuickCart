import connectDB from "@/config/db";
import Order from "@/models/Order";
import Product from "@/models/Product";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }

    await connectDB();

    const orders = await Order.find({ userId }).sort({ date: -1 });

    const detailedOrders = await Promise.all(
      orders.map(async (order) => {
        const itemsWithProduct = await Promise.all(
          order.items.map(async (item) => {
            const product = await Product.findById(item.product);
            return {
              product,
              quantity: item.quantity,
            };
          })
        );

        const address = await Address.findById(order.address);

        return {
          ...order._doc,
          items: itemsWithProduct,
          address,
        };
      })
    );

    return NextResponse.json({
      success: true,
      orders: detailedOrders,
    });

  } catch (error) {
    console.error("LIST ORDER ERROR:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
