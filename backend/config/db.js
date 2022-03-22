import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MangoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`ERROR: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
