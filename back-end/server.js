import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import availableTripRoutes from "./routes/availableTripRoutes.js";

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/trips", availableTripRoutes);

// Default
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 3400;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
