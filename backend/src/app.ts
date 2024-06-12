import express from "express";
import cors from "cors";

import corsConfig from "@configs/cors.config";
import apiRoutes from "@routes/apiRoutes";
import swaggerRoute from "@routes/swagger.route";
import requestLogger from "@middlewares/requestLogger.middleware";
import errorMiddleware from "@middlewares/errorHandler.middleware";

const app = express();

app.use(cors(corsConfig))
app.use(express.json())
app.use(requestLogger);
app.use("/api", apiRoutes);
app.use("/api-docs", swaggerRoute);
app.use(errorMiddleware);


export default app;