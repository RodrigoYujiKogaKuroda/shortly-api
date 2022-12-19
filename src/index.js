import express from "express";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import urlRoutes from "./routes/url.routes.js";
import userRoutes from "./routes/user.routes.js";
import rankingRoutes from "./routes/ranking.routes.js";

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(urlRoutes);
app.use(userRoutes);
app.use(rankingRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running in port: ${port}`));