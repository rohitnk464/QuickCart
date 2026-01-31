import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// 1. Fixed the name to connectDB (Capital B)
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    // 2. Fixed the promise assignment
    cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then(mongoose => {
      return mongoose;
    })
  }


  cached.conn = await cached.promise
  return cached.conn;
}
export default connectDB;