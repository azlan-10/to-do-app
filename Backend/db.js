import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const mongoURI = process.env.MONGO_URI; // Get MONGO_URI from .env

if (!mongoURI) {
  console.error("❌ MONGO_URI is missing from .env file!");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ Database Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ Error connecting to Database:", err);
    // process.exit(1); // Exit on failure
  });

const schema = new mongoose.Schema({  // Use 'new' when defining schema
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Todos = mongoose.model("Todos", schema);

export default Todos;
