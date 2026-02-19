import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { newsRoutes } from "./routes/news.js";
import { companyRoutes } from "./routes/companies.js";
import { alertRoutes } from "./routes/alerts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/news", newsRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/alerts", alertRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
