import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI || process.env.MONGO_URI.includes("<username>") || process.env.MONGO_URI.includes("<password>")) {
      console.warn("⚠️ Warning: MONGO_URI in backend/.env is either missing or contains placeholder values.");
      console.warn("Please configure a valid MongoDB Atlas connection string in backend/.env.");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
      family: 4, // Use IPv4 for reliable Windows / Node resolution
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    if (error.message.includes("querySrv")) {
      console.error("\n💡 DNS Resolution Tip:");
      console.error("Your network/ISP is blocking MongoDB SRV DNS queries.");
      console.error("You can switch to the direct standard replica set URI in backend/.env.");
    } else {
      console.error("Tip: Ensure your MongoDB Atlas cluster has IP Access List set to allow your IP (or 0.0.0.0/0).");
    }
    throw error;
  }
};

export default connectDB;
