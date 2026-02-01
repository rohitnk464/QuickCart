import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk userId
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  amount: { type: Number, required: true },
  address: { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  status: { type: String, default: "Order Placed" },
  date: { type: Number, required: true },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
