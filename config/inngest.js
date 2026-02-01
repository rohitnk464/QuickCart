import { Inngest } from "inngest";
import connectDB from "@/config/db";
import User from "@/models/User";
import Order from "@/models/Order";

export const inngest = new Inngest({ id: "quickcart-next" });

/* ---------------- USER CREATE ---------------- */
export const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const {
      id,
      first_name,
      last_name,
      email_addresses,
      image_url,
    } = event.data;

    const userData = {
      clerkId: id,
      email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`,
      imageUrl: image_url,
      cartItems: {},
    };

    await connectDB();

    await User.findOneAndUpdate(
      { clerkId: id },
      { $set: userData },
      { upsert: true, new: true }
    );

    return { success: true };
  }
);

/* ---------------- USER UPDATE ---------------- */
export const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const {
      id,
      first_name,
      last_name,
      email_addresses,
      image_url,
    } = event.data;

    const userData = {
      email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`,
      imageUrl: image_url,
    };

    await connectDB();

    await User.findOneAndUpdate(
      { clerkId: id },
      userData,
      { new: true }
    );

    return { success: true };
  }
);

/* ---------------- USER DELETE ---------------- */
export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-from-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    await connectDB();
    await User.findOneAndDelete({ clerkId: id });

    return { success: true };
  }
);

/* ---------------- ORDER CREATE ---------------- */
export const createUserOrder = inngest.createFunction(
  {
    id: "create-user-order",
    batchEvents: {
      maxSize: 25,
      timeout: "5s",
    },
  },
  { event: "order/created" },
  async ({ events }) => {
    const orders = events.map((event) => ({
      userId: event.data.userId,
      items: event.data.items,
      amount: event.data.amount,
      address: event.data.address,
      date: event.data.date,
    }));

    await connectDB();
    await Order.insertMany(orders);

    return { success: true, processed: orders.length };
  }
);
