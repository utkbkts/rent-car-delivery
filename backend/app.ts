import express from "express";
import dotenv from "dotenv";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import { startApolloServer } from "./apollo/apolloServer";

// Load environment variables
dotenv.config();

// Constants
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL;

// Initialize Express App
const app = express() as any;

// Middleware
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: "150mb" }));
app.use(express.urlencoded({ extended: true, limit: "150mb" }));

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

// Routes

// Start the Server
const startServer = async () => {
  try {
    await startApolloServer(app);
    app.listen(PORT, () => {
      console.log(`✅ Server is running on port ${PORT}`);
      console.log(`🌐 Access it at ${FRONTEND_URL}`);
    });
  } catch (err) {
    console.error("❌ Failed to start the server:", err);
    process.exit(1);
  }
};

startServer();
