import connectDB from "@/config/db";
import Order from "@/models/Order";
import Product from "@/models/Product";
import Address from "@/models/Address";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ success: false, message: "Unauthorized" });
    }

    const client = await clerkClient();
    const clerkUser = await client.users.getUser(userId);
    const role = clerkUser.publicMetadata?.role;

    if (role !== "seller") {
      return NextResponse.json({ success: false, message: "Not a seller" });
    }

    await connectDB();

    const orders = await Order.find().sort({ date: -1 });

    const detailedOrders = await Promise.all(
      orders.map(async (order) => {
        const itemsWithProduct = await Promise.all(
          order.items.map(async (item) => {
            const product = await Product.findById(item.product);
            return { product, quantity: item.quantity };
          })
        );

        const address = await Address.findById(order.address);

        return { ...order._doc, items: itemsWithProduct, address };
      })
    );

    return NextResponse.json({ success: true, orders });
  } catch (error) {
    console.error("SELLER ORDERS ERROR:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
