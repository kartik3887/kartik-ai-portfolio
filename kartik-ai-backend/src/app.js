import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import dashboardRoutes from "./routes/dashboard.routes.js";
import authRoutes from "./routes/auth.routes.js";
import contactRoute from "./routes/contact.route.js";
import projectRoutes from "./routes/project.routes.js";
import skillRoutes from "./routes/skill.routes.js";
import experienceRoutes from "./routes/experience.routes.js";
import resumeRoutes from "./routes/resume.routes.js";
import profileRoutes from "./routes/profile.route.js"

import "./config/cloudinary.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoute);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/profile", profileRoutes)

app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Kartik AI Backend Running...",
  });
});

export default app;
