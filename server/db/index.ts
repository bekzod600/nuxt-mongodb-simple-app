import mongoose from "mongoose";

export default async (_nitroApp: any) => {
  const config = useRuntimeConfig();
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
